require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  attr_reader :idea

  def setup
    @idea = Idea.create!(title: "COOL", body: "super cool idea")
  end

  test "idea has correct title and body" do
    assert_equal "COOL", idea.title
    assert_equal "super cool idea", idea.body
  end

end
