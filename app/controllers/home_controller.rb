class IdeaPagesController < ApplicationController
  def index
    @ideas = Idea.all
  end
end
