class Api::V1::IdeasController < ApplicationController
  respond_to :json, :html

  def index
    @ideas = Idea.all
    respond_with @ideas
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    binding.pry
    @idea = Idea.update(params[:id], idea_params)
    respond_with @idea
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end

end
