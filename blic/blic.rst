Brandeis Laptop In C
====================

These are the notes for a performance of Terry Riley's _In_C_  to
take place at Brandeis University as a part of the 2018 Festival
of the Creative Arts. You can read more about the background of
the composition (or the composer_) using wikipedia_ or reading
Taro Parviainen's enlightening article_ on some of the historical
cultural and conceptual issues surrounding it.

.. _composer: https://en.wikipedia.org/wiki/Terry_Riley
.. _wikipedia: https://en.wikipedia.org/wiki/In_C
.. _article: https://teropa.info/blog/2017/01/23/terry-rileys-in-c.html

The performance is scheduled for *Sunday 22 April 2018 12 noon*
in the Rose Art Museum on the Brandeis Campus. There will be one
or more rehearsals before that I will attempt to schedule
beforehand.

The original idea was to use laptops to play a realization of the
score, maybe along with a few other more quiet instruments like
melodicas or recorders or maybe even an accordian or two. As the
performance approaches, it seems more and more likely that there
will be just laptops. 


Tech
----

The laptops will use a modified version of the javascript
implementation_ written by Tero Parviainen to generate audio. I
have forked his code in order to make a few modifications for our
performings needs.

.. _implementation: https://teropa.info/in-c/

First you will need to select a laptop to use for the performance.
There will be electricity there, so battery power should not be a
limitation. I would suggest you think about some auxillary
speakers, but the plain laptop speakers have a certain charm of
their own.

Then you will need to install some software.

* application code from my github fork_
* node.js_ javascript environment
* npm_ javascript package manger (prolly comes with node.js)
* yarn_ dependency manager

.. _fork: https://github.com/js0000/in-c
.. _node.js: https://nodejs.org
.. _npm: https://www.npmjs.com
.. _yarn: https://yarnpkg.com

I have installed the set successfully on linux, freebsd, and
macOS. As with any software, the way you get it on your machine is
up to you, but using pre-built packages is most likely the
quickest and easiest way to get something running.

The final technical tweak before generating the audio is to set
the ensemble that will be used for your laptop. There are 5
different options available, with more possible. Here are the
steps to set it up.

1. cd to in-c/src from the repository cloned from github
2. select one of the pre-existing ensembles (ensemble.json.0 through
   ensemble.json.4)
3. create a soft link from the selected ensemble file to the name
   "ensemble.json" (nothing trailing)

Now you are ready to run the software. You can read the
in-c/README.md file for more information on running it, but more
simply, you'll need to run the following commands.

1. yarn
2. npm start

The terminal window will change and eventually you should see the
screen split into several smaller text based boxes. The first time
it runs, you will see various compilations and other software
processes happening. After some time has passed, you will
(hopefully) see the Status window in the upper right hand corner
display "Success."

If not, make sure you have followed the steps outlined above. If
you are still stumped, feel free to contact me.

Once the application is running, you should be able to bring up
the (modern) web browser of your choice, and direct it to this
URL:

* http://localhost:8080/

Once the page loads, you should see the opening screen of the application with
a big *PLAY* button. I'm guessing you know what to do next ...

To close the application, bring the terminal window running the application to
the forefront and enter a Control-C character to shut it down.

Score
-----

The score is an appendix to this note. I would like all performers
to have read it (both music and words) before we perform. Here are
some of the instructions in the score that I think are worth
remembering:

- players should listen to each other
- volume should vary thoughout
- spend about a minute on each pattern
- pay attention to the ending procedures

The application is set to run at an eigth note equals 120 beats
per minute. This means that you can use a plain old clock (on your
computer or on your cell phone) to synchronize, as each quarter
note equals 1 second.

For the performance, we are scheduled to start at noon. My plan is
to use the minute between 12:00PM and 12:01PM to synchronize the
eighth note pulse among our computers. This is mostly a manner of
pressing the *PLAY* button at the correct time. We will rehearse
this.

Then, each of the 53 numbered sections will be sounded around and
within the appropriate minute of time. For example, section 17
will be (mostly) played between 12:17PM and 12:18PM. As is
mentioned in the score, the parts are not supposed to be
rigorously synchronized. In fact, the serendipitous combination of
parts unexpectedly is one of the primary points of musical
interest.

The timing plan, then, allows for pretty easy synchronizations between the
players as well as making it easy to "get back on track" if necessary by simply
looking at a clock. The one part of this that players will need to manage on
their own, is which of the 53 parts a particular voice is on. There is a small
circle display that gets updated, but it is probably not possible to figure out
if the part being played is number 22 or 23 by sight alone. I'd suggest a file
or piece of paper to track it- but that's really up to each performer. Anyway,
the important thing is to be able to manage this during the performance in a
way that makes sense to you.


Other
-----

I will try to make a recording but there is no guarantee that it
will be anything near a pristine recording environment. If the recording is
successful, I would be happy to make it available to any who might be
interested.

The performance will offer many opportunities to experience
various interactions between musicians computers and programming
of many types. I hope it will be spectacular!

Please feel free to contact me if needed:

- email: jsaylor@brandeis.edu
- phone: 781.736.4519
