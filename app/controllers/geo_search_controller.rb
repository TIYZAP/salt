class GeoSearchController < ApplicationController
  def search
    @client = GooglePlaces::Client.new(ENV['GOOGLE_API'])
    @lat =

    render json: @client.spots(39.7682937, -86.1516103, :types => 'restaurant', :radius => 8046)

  end
end
