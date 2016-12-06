class GeoSearchController < ApplicationController
  include Geokit::Geocoders

  def search
    if params[:address].present?
      res = MultiGeocoder.geocode(params[:address])
      @lat = res.lat
      @lng = res.lng
      @client = GooglePlaces::Client.new(ENV['GOOGLE_API'])
      if params[:name].present?
        @name = params[:name]
        render json: @client.spots(@lat, @lng, :name => @name, :types => 'restaurant',:radius => 8046).map{|this_one| build_hash_for_output(this_one) }
      else
        render json: @client.spots(@lat, @lng, :types => 'restaurant', :radius => 8046).map{|this_one| build_hash_for_output(this_one) }
      end
    end
  end

  def show
    @client = GooglePlaces::Client.new(ENV['GOOGLE_API'])
    render json: @client.spot(params[:place_id])
  end


  private

  def build_hash_for_output(spot)
    {
      name: spot.name , vicinity: spot.vicinity, place_id: spot.place_id, photo: spot.photos
    }
  end
end
