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
    render json: @client.spots(@lat, @lng, :types => 'restaurant', :radius => 8046)
  end
end
