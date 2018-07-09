### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#needs another =
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

#This is a spelling mistake should be def not dif  
  dif highest_card(card1 card2) #comma required
  if card1.value > card2.value
    return card.name #should be card1
  else
    card2
  end
end
#This is an extra end
end

def self.cards_total(cards)
  total
  #what does the total equal?
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

#There is a missing end for the class
```
