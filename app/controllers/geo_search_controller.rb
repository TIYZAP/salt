class GeoSearchController < ApplicationController
  include Geokit::Geocoders
  # def test
  #   @client = GooglePlaces::Client.new(ENV['GOOGLE_API'])
  #   @lat =
  #
  #   render json: @client.spots(39.7682937, -86.1516103, :types => 'restaurant', :radius => 8046)
  #
  # end

  def search
    res = MultiGeocoder.geocode(params[:address])
    @lat = res.lat
    @lng = res.lng
    @client = GooglePlaces::Client.new(ENV['GOOGLE_API'])
    render json: @client.spots(@lat, @lng, :types => 'restaurant', :radius => 8046).map{|this_one| build_hash_for_output(this_one) }
  end


  private

  def build_hash_for_output(spot)
    {
      name: spot.name , vicinity: spot.vicinity, place_id: spot.place_id, photo: spot.photos
    }
  end
end
