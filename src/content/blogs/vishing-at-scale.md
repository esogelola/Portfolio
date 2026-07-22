# Vishing at Scale: What a Phone Call Can Still Take From You

### What building an AI voice caller taught me about trust, restraint, and the systems we still authenticate by instinct.

_Published on July 22, 2026_

## What Do We Trust When We Answer the Phone?

Most of us know what a suspicious email looks like.

The sender is slightly wrong. The link is strange. The message wants something too quickly. Even when the email looks convincing, there is usually something we can inspect before we act.

A phone call is different.

The evidence disappears as quickly as it arrives. A voice sounds calm. The caller knows the language of the company. They understand the process well enough to make the interruption feel ordinary.

And ordinary is powerful.

We often imagine social engineering as an attacker creating panic. But many successful pretexts do not sound dangerous. They sound administrative. A survey. A vendor following up. Someone from IT trying to close a ticket. A driver asking where to leave the keys.

The phone works because it places a person inside a social situation before it gives them time to inspect it.

That is the problem Sarah Goodman and I wanted to study with **BoB-26**.

## How Did We Get Here?

Sarah competed in the DEF CON Social Engineering Village's Battle of the Bots before I joined the project. Her first version proved that an automated voice caller could hold a pretext together. For DEF CON 34, she asked me to become the engineering lead and help rebuild the system around a new target, a larger objective set, and a much stricter operating model.

Our team is called **Sarah eManuel Override**.

Sarah leads the social-engineering side: pretexts, research, and the language that makes a caller believable. I build the machinery that has to carry that language through a real conversation without losing its place, breaking character, or crossing a line we did not authorize.

That division has taught me something important.

The model is only one part of persuasion.

The rest is systems design.

## What Did We Actually Build?

BoB-26 is a defensive research demonstrator for the authorized competition environment. An operator chooses an approved number and one of four personas, then begins the call. From that point, the application conducts the conversation without a human speaking on the line.

The system is a Python and Flask service running in Docker. Twilio carries the call and transcribes the participant's side of the conversation. Claude interprets each turn and prepares the next response. ElevenLabs gives each persona a distinct synthetic voice. A small live dashboard shows the operator the persona, broad emotional state, objective progress, and call status.

The four personas are deliberately different:

- **Golden** conducts an employee-experience and security-awareness survey.
- **Janet** presents as an internal IT support specialist.
- **George** is an outside driver coordinating a vehicle transfer.
- **Marco** is a small fleet-maintenance vendor trying to understand the onboarding process.

None of these characters is extraordinary. That is the point.

Each one occupies a familiar relationship: colleague, support desk, contractor, vendor. Each pretext creates a reasonable explanation for asking questions. The system does not need a brilliant lie when an ordinary workflow already gives the conversation its shape.

This is what makes modern vishing uncomfortable. The components are accessible, but accessibility is not the deepest risk. The deeper risk is that natural language can now be connected to repeatable infrastructure.

A pretext becomes structured data.
A voice becomes a configuration choice.
A conversation becomes a state machine.

The craft does not disappear. It becomes reusable.

## The Voice Is Not the Most Important Part

When people hear "AI vishing," they tend to imagine voice cloning first.

The perfect copy of an executive. The familiar voice of a family member. A synthetic speaker so realistic that no one can tell the difference.

Those attacks matter, but BoB-26 does not clone a real person's voice. Our personas use distinct synthetic voices, and the system is explicitly prohibited from cloning someone without written consent.

What surprised me is how little the central problem depends on imitation.

A caller does not always need to sound familiar. They need to sound plausible. They need to understand why they are calling, remember what has already been said, ask one sensible question at a time, and respond without creating enough friction for the other person to stop.

In other words, the danger is not only that a machine can sound like someone you trust.

It is that a machine can participate in the rituals through which trust is normally established.

The greeting.
The small acknowledgement.
The correct department name.
The patience to clarify a question.
The polite exit when the moment is wrong.

We have spent years teaching people to notice robotic speech. We have spent far less time teaching our organizations that fluent participation in a process is not proof of identity.

## Why Put Limits on a System Built to Persuade?

Building a defensive demonstrator creates a difficult question: how do you make the risk legible without reproducing the harm you are trying to explain?

Our answer was not a policy document placed beside the application. It was architecture placed inside it.

Every response from the language model passes through a safety guardrail before it can become speech. There is no alternate route from the model to the voice layer. If the response tries to solicit personal information, introduce fear, make a false promise, probe into someone's private life, impersonate prohibited authority, or threaten a person's job, it is discarded and replaced with a neutral fallback.

If the guardrail itself fails, the response does not pass.

The system fails closed.

We made other choices that reduce what the application is allowed to become:

- It does not retain the conversation after the call.
- It does not place caller identity, phone numbers, or transcripts on the dashboard.
- It does not harvest a structured record for later use.
- It does not escalate pressure when someone resists.
- It may clarify an unclear answer, then it must advance or exit rather than badger the person.
- A human operator remains attached to the conference and has an independent kill switch.
- It is operated only with informed consent under the competition rules.

These limits make the bot less capable in ways that matter.

Good.

A research system does not earn the right to create harm merely because the harm would make the demonstration more convincing. If a safeguard exists only in our intentions, it is not a safeguard. The system should be structurally unable to take the path we have ruled out.

This is the same idea behind my work on modern Automatons: intelligence can be useful without being sovereign. Capability is not permission. The boundary between the two should live in code.

## Social Engineering Does Not Only Target Humans

There is an irony in building an AI social-engineering demonstrator.

We normally describe social engineering as the manipulation of people through language. But language models are also persuaded through language. Prompt injection, excessive agency, misinformation, and sensitive-information disclosure all share something with the phone call: an untrusted speaker tries to make a system treat their instructions as authority.

The human and the machine are vulnerable to the same confusion.

_This request sounds coherent, therefore it must be legitimate._

It does not follow.

A believable explanation is still only an explanation. It is not provenance. It is not authorization. It is not proof that the speaker has the right to ask, or that the listener has the right to comply.

Security fails when we let language collapse those distinctions.

## Trust Is a Protocol Without a Signature

Email has accumulated ways to carry provenance. The implementations are imperfect, but the ideas are familiar: signed domains, reputation, link inspection, filtering, and records that can be reviewed after the fact.

The telephone still asks us to make a decision from a voice and a number on a screen.

Caller ID is not identity.
A local area code is not identity.
Knowledge of an internal process is not identity.
A familiar voice is increasingly not identity.

Yet many business processes still treat all four as evidence.

This is why telling people to "be more careful" is not enough. Care is a feeling. Under pressure, feelings lose to process.

The defense needs to be just as structural as the attack.

If a caller asks for information or an action with consequence, the person receiving the call should not have to improvise a security decision. The workflow should already tell them what happens next.

Hang up.
Find the organization or person through an authoritative directory.
Call back through that trusted channel.

If the request concerns access, money, credentials, an MFA prompt, or sensitive company information, move the decision into a channel where identity can be independently verified.

This is not distrust. It is good protocol.

Organizations also have to make verification socially safe. Employees will not interrupt a suspicious interaction if the culture teaches them that questioning IT, a manager, or a vendor is rude. A secure process gives people permission to slow down and rewards them for using it.

Trust should survive verification.

If it does not, it was pressure.

## What Has BoB-26 Proven So Far?

The honest answer matters here.

DEF CON 34 takes place in August. At the time of writing, BoB-26 is a built and tested demonstrator preparing for the competition—not a completed field study, and not evidence that every call succeeds.

I do not want to turn a working architecture into a larger empirical claim than it can support.

What the project has proven is narrower and still important:

A small team can combine ordinary cloud services into an autonomous, multi-turn voice system. That system can carry several distinct trust relationships without requiring four separate applications. It can be designed with real supervision, privacy boundaries, deterministic safety checks, and explicit limits on persistence and pressure.

The offensive capability and the defensive discipline arrive together.

That is the lesson I want to keep.

We should not wait for synthetic voices to become perfect before changing how we authenticate requests over the phone. Perfect imitation is not required. Plausible participation is enough to challenge a process that confuses conversation with proof.

And we should not accept that powerful AI systems must be unbounded to be useful. BoB-26 can reason, converse, and pursue a narrow objective. It can also be forced to forget, forced to stop, and prevented from saying what it should never say.

The machine can be capable and still wait at the boundary.

So can we.

When the phone rings, listen. Ask questions. Understand the request.

Then, before anything consequential happens, verify where it came from.

The future of trust will not be secured by our ability to recognize a fake voice.

It will be secured by refusing to treat any voice as authority on its own.

---

_BoB-26 is a collaboration with **Sarah Goodman** under team **Sarah eManuel Override** for DEF CON 34's Social Engineering Village Battle of the Bots. It is a defensive research demonstrator operated only with informed consent._

_Part of an ongoing series on social engineering and the security of human-facing AI._
