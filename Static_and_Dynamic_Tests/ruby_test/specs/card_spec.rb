require("minitest/autorun")
require("minitest/rg")

require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("spades", 3)
    @cardgame = CardGame.new()
  end

  def test_checkforAce()
    assert_equal(true, @cardgame.checkforAce(@card1))
  end
  # for errors on nil class look to the left of the dot was this is the instance that you are working with
  def test_highest_card()
    assert_equal(@card2, @cardgame.highest_card(@card1, @card2))
  end
# #when invoking a method you feed throughy the values within the succeeding brackets
  def test_cards_total()
    assert_equal("You have a total of 4", @cardgame.cards_total([@card1, @card2]))
  end

end
