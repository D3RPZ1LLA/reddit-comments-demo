# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://www.reddit.com/r/AskReddit/comments/aorumk/hey_reddit_whats_the_strangest_coincidence_youve/
test_user = User.create(username: 'test_user')
rich_cauliflower = User.create(username: 'RichCauliflower')
bigphazell = User.create(username: 'bigphazell')
superbad_zombie = User.create(username: 'Superbad_Zombie')

post_strangest_coincidence = rich_cauliflower.posts.create(
  title: 'Strangest Coincidence',
  message: "Hey Reddit, what's the strangest coincidence you've ever personally experienced?"
)

bigphazell_comment = post_strangest_coincidence.comments.create(
  user_id: bigphazell.id,
  message: "I used to get two busses home from work. I got off the first one having left my phone and keys on the front seat of the bus without realising. Got on the second bus, went to my favoured front seat and my possessions that I didn’t know were missing were waiting for me. The bus had changed driver and route. Still freaks my nut out to this day."
)

bigphazell_comment.comments.create(
  user_id: superbad_zombie.id,
  message: "Phone, Wallet, Keys"
)
##


# https://www.reddit.com/r/todayilearned/comments/aovexg/til_mike_tyson_loved_keeping_pigeons_as_a_kid_and/
to_the_tenth_power = User.create(username: 'to_the_tenth_power')
paperbackbuddha = User.create(username: 'PaperbackBuddha')
sonofabutch = User.create(username: 'sonofabutch')
misterfifths = User.create(username: 'MisterFifths')

til_mike_tyson = to_the_tenth_power.posts.create(
  title: 'TIL Mike Tyson',
  message: "TIL Mike Tyson loved keeping pigeons as a kid and the first fight he ever got into was when a thug ripped the head off one of his birds. He said, “The pigeon was the first thing I ever loved in my life. I don’t know why, I feel ridiculous trying to explain it. Pigeons are just so much like people.” https://www.telegraph.co.uk/culture/tvandradio/8376856/Dead-pigeon-prompted-Mike-Tysons-first-fight.html"
)

til_mike_tyson.comments.create(
  user_id: paperbackbuddha.id,
  message: "Just think how different his life would have been had he simply been left to keep his pigeons. In other words, how many other people out there are living quiet lives, doing what they love, because no one killed it when they were young."
)

til_mike_tyson.comments.create(
  user_id: sonofabutch.id,
  message: "Of all the pigeons that guy could have killed, he picked the one loved by Mike Tyson."
)
##
