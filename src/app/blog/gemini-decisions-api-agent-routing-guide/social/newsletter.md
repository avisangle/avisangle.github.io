Google released a new kind of model last week that doesn't write anything. You give it an input and a list of questions, and it tells you how likely each answer is. In most agent loops, a lot of model calls are just deciding what to do next, so I wanted to know whether this could take over that job.

It can, for short inputs. A routing decision costs roughly a quarter of what the same decision costs on Google's cheapest generative model, and the confidence number lets you send unsure cases to a bigger model or a person instead of guessing. The catch is that the price advantage mostly disappears if your agent sends a long, repeated prompt every turn.

The post is for anyone building agents who wants routing that's cheaper and easier to trust.
