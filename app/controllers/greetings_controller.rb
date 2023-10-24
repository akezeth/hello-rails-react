class GreetingsController < ApplicationController
  def index
    @random_greeting = Greeting.order('RANDOM()').first
    render json: @random_greeting.message
  end
end
