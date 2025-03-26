import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GrammarCard } from "@/components/ui/grammar-card";
import { ExerciseItem } from "@/components/ui/exercise-item";
import { ComingSoon } from "@/components/ui/coming-soon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import profileImage from "@/assets/profile.jpeg";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {/* Hero Section */}
        <section className="relative mb-6 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-6 left-5 w-12 h-12 rounded-full bg-accent-4 opacity-70"></div>
          <div className="absolute top-10 left-20 w-16 h-16 rounded-full bg-accent-3 opacity-70"></div>
          <div className="absolute top-4 right-16 w-14 h-14 rounded-full bg-accent-2 opacity-70"></div>
          <div className="absolute top-16 right-6 w-10 h-10 rounded-full bg-primary opacity-70"></div>
          <div className="absolute bottom-2 left-1/4 w-12 h-12 rounded-full bg-accent-1 opacity-70"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg text-neutral-700 font-medium max-w-3xl mx-auto mb-5 leading-relaxed">
              Improve your English skills with clear lessons, examples, and interactive exercises
            </p>
          </div>

          {/* Contact Teacher Modal */}
          <div className="flex justify-center mt-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary text-white text-sm px-6 py-2 rounded-full hover:bg-primary/90 transition-all">
                  Contact teacher for 1-1 help with IELTs and English
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={profileImage}
                      alt="Teacher Paul"
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <DialogTitle className="text-2xl font-bold text-[#333]">Contact Teacher Paul</DialogTitle>
                      <DialogDescription className="text-neutral-600">
                        Fill out the form below to get personalized help with your IELTS preparation or English learning needs.
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="rounded-md border-neutral-200 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="rounded-md border-neutral-200 focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-700">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you need help with (IELTS preparation, grammar, speaking, etc.)"
                      className="rounded-md border-neutral-200 focus:border-primary focus:ring-primary min-h-[120px]"
                      required
                    />
                  </div>

                  <DialogFooter>
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </DialogFooter>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
                  )}
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Grammar Section */}
        <section id="grammar" className="mb-16">
          <div className="section-header mb-8">
            <h2 className="section-title inline-flex items-center">
              <span className="bg-accent-1 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <i className="fa-solid fa-book"></i>
              </span>
              <div>
                <span className="text-2xl sm:text-3xl font-semibold">Grammar - Common IELTS Errors</span>
              </div>
            </h2>
            <div className="h-1 w-20 bg-accent-1 mt-2"></div>
          </div>

          {/* Introduction Card */}
          <div className="card mb-8">
            <p className="text-neutral-700 leading-relaxed">
              Welcome to the Grammar section! Here, you'll find the most common grammar mistakes for IELTS, and general speaking.
            </p>
          </div>

          {/* Present Tense Card */}
          <GrammarCard title="Present Tense: Subject-Verb Agreement">
            <p className="mb-4">In English, verbs must agree with their subjects in the present tense. This is especially important with third-person singular subjects (he, she, it).</p>

            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">The Rule:</h4>
              <p className="mb-2">Add <span className="font-medium">-s</span> or <span className="font-medium">-es</span> to the verb when the subject is third-person singular (he, she, it).</p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                <li>I/You/We/They → base form of verb</li>
                <li>He/She/It → verb + s/es</li>
              </ul>
            </div>

            {/* Examples Table */}
            <div className="mb-6 overflow-x-auto">
              <h4 className="font-medium text-lg mb-3">Examples:</h4>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-4 py-2 text-left border border-neutral-200">Subject</th>
                    <th className="px-4 py-2 text-left border border-neutral-200">Correct</th>
                    <th className="px-4 py-2 text-left border border-neutral-200">Incorrect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-neutral-200 font-medium">I</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">I <span className="underline">go</span> to school every day.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">I <span className="underline">goes</span> to school every day.</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 border border-neutral-200 font-medium">You</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">You <span className="underline">speak</span> English well.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">You <span className="underline">speaks</span> English well.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-neutral-200 font-medium">He</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">He <span className="underline">goes</span> to work by bus.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">He <span className="underline">go</span> to work by bus.</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 border border-neutral-200 font-medium">She</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">She <span className="underline">watches</span> movies on weekends.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">She <span className="underline">watch</span> movies on weekends.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-neutral-200 font-medium">It</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">It <span className="underline">rains</span> a lot in spring.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">It <span className="underline">rain</span> a lot in spring.</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 border border-neutral-200 font-medium">We</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">We <span className="underline">study</span> English together.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">We <span className="underline">studies</span> English together.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-neutral-200 font-medium">They</td>
                    <td className="px-4 py-2 border border-neutral-200 text-correct">They <span className="underline">live</span> in New York.</td>
                    <td className="px-4 py-2 border border-neutral-200 text-incorrect">They <span className="underline">lives</span> in New York.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Special Rules */}
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Special Rules:</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                <li>For verbs ending in <strong>o, s, ch, sh, x, z</strong> → add <strong>-es</strong>
                  <div className="ml-4 mt-1 text-sm">
                    <span className="text-neutral-600">go → goes, watch → watches, fix → fixes</span>
                  </div>
                </li>
                <li>For verbs ending in <strong>consonant + y</strong> → change <strong>y</strong> to <strong>i</strong> and add <strong>-es</strong>
                  <div className="ml-4 mt-1 text-sm">
                    <span className="text-neutral-600">study → studies, fly → flies</span>
                  </div>
                </li>
                <li>For verbs ending in <strong>vowel + y</strong> → just add <strong>-s</strong>
                  <div className="ml-4 mt-1 text-sm">
                    <span className="text-neutral-600">play → plays, say → says</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Practice Section */}
            <div className="mt-8">
              <h4 className="font-medium text-lg mb-3">Practice Exercise:</h4>
              <p className="mb-3">Choose the correct form of the verb for each sentence:</p>

              <ExerciseItem
                id="1"
                question="1. Sarah <span class='font-medium'>(work/works)</span> at a hospital."
                choices={["work", "works"]}
                correctAnswer="works"
                correctFeedback="Correct! We use 'works' with 'she'."
                incorrectFeedback="Incorrect. 'Sarah' is a third-person singular subject (she), so we need to add -s to the verb: 'works'."
              />

              <ExerciseItem
                id="2"
                question="2. The teachers <span class='font-medium'>(help/helps)</span> students every day."
                choices={["help", "helps"]}
                correctAnswer="help"
                correctFeedback="Correct! 'The teachers' is plural, so we use 'help' without -s."
                incorrectFeedback="Incorrect. 'The teachers' is a plural subject (they), so we use the base form of the verb: 'help'."
              />

              <ExerciseItem
                id="3"
                question="3. He <span class='font-medium'>(study/studies)</span> English twice a week."
                choices={["study", "studies"]}
                correctAnswer="studies"
                correctFeedback="Correct! For 'he' we need 'studies' (study → studies)."
                incorrectFeedback="Incorrect. 'He' is a third-person singular subject, and since 'study' ends in 'y' preceded by a consonant, we change 'y' to 'i' and add 'es': 'studies'."
              />
            </div>
          </GrammarCard>

          {/* Past Tense Card */}
          <GrammarCard title="Past Tense: Regular and Irregular Verbs">
            <p className="mb-4">The past tense is used to talk about actions that happened in the past. Learning to use it correctly is essential for clear communication.</p>

            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Regular Verbs:</h4>
              <p className="mb-2">Most verbs form their past tense by adding <span className="font-medium">-ed</span> to the base form.</p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                <li>walk → walked</li>
                <li>play → played</li>
                <li>talk → talked</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Spelling Rules for Regular Verbs:</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                <li>For verbs ending in <strong>e</strong> → add <strong>-d</strong>
                  <div className="ml-4 mt-1 text-sm">
                    <span className="text-neutral-600">like → liked, hope → hoped</span>
                  </div>
                </li>
                <li>For verbs ending in <strong>consonant + y</strong> → change <strong>y</strong> to <strong>i</strong> and add <strong>-ed</strong>
                  <div className="ml-4 mt-1 text-sm">
                    <span className="text-neutral-600">study → studied, try → tried</span>
                  </div>
                </li>
                <li>For short verbs with one syllable ending in <strong>consonant-vowel-consonant</strong> → double the final consonant and add <strong>-ed</strong>
                  <div className="ml-4 mt-1 text-sm">
                    <span className="text-neutral-600">stop → stopped, plan → planned</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Irregular Verbs:</h4>
              <p className="mb-3">Many common verbs have irregular past tense forms that must be memorized:</p>

              {/* Irregular Verbs Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="px-4 py-2 text-left border border-neutral-200">Base Form</th>
                      <th className="px-4 py-2 text-left border border-neutral-200">Past Tense</th>
                      <th className="px-4 py-2 text-left border border-neutral-200">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-neutral-200">go</td>
                      <td className="px-4 py-2 border border-neutral-200">went</td>
                      <td className="px-4 py-2 border border-neutral-200">I <span className="underline">went</span> to the store yesterday.</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-2 border border-neutral-200">see</td>
                      <td className="px-4 py-2 border border-neutral-200">saw</td>
                      <td className="px-4 py-2 border border-neutral-200">She <span className="underline">saw</span> a movie last weekend.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-neutral-200">eat</td>
                      <td className="px-4 py-2 border border-neutral-200">ate</td>
                      <td className="px-4 py-2 border border-neutral-200">We <span className="underline">ate</span> dinner at 7 PM.</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-2 border border-neutral-200">buy</td>
                      <td className="px-4 py-2 border border-neutral-200">bought</td>
                      <td className="px-4 py-2 border border-neutral-200">They <span className="underline">bought</span> a new car.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-neutral-200">think</td>
                      <td className="px-4 py-2 border border-neutral-200">thought</td>
                      <td className="px-4 py-2 border border-neutral-200">I <span className="underline">thought</span> about it carefully.</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-2 border border-neutral-200">make</td>
                      <td className="px-4 py-2 border border-neutral-200">made</td>
                      <td className="px-4 py-2 border border-neutral-200">He <span className="underline">made</span> a cake for the party.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-neutral-200">do</td>
                      <td className="px-4 py-2 border border-neutral-200">did</td>
                      <td className="px-4 py-2 border border-neutral-200">What <span className="underline">did</span> you do last summer?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Examples of Correct vs Incorrect Usage */}
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-3">Common Mistakes:</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-incorrect bg-opacity-5 p-4 rounded-md border border-incorrect border-opacity-30">
                  <h5 className="font-medium text-incorrect mb-2">Incorrect Usage:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Yesterday I <span className="line-through">go</span> to the library.</li>
                    <li>She <span className="line-through">goed</span> to the park.</li>
                    <li>They <span className="line-through">eated</span> lunch at noon.</li>
                    <li>We <span className="line-through">buyed</span> groceries.</li>
                  </ul>
                </div>

                <div className="bg-correct bg-opacity-5 p-4 rounded-md border border-correct border-opacity-30">
                  <h5 className="font-medium text-correct mb-2">Correct Usage:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Yesterday I <span className="font-medium">went</span> to the library.</li>
                    <li>She <span className="font-medium">went</span> to the park.</li>
                    <li>They <span className="font-medium">ate</span> lunch at noon.</li>
                    <li>We <span className="font-medium">bought</span> groceries.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practice Exercise */}
            <div className="mt-8">
              <h4 className="font-medium text-lg mb-3">Practice Exercise:</h4>
              <p className="mb-3">Fill in the blanks with the correct past tense form:</p>

              <ExerciseItem
                id="4"
                question="1. Last weekend, we <span class='font-medium'>(go)</span> to the beach."
                choices={["goed", "went"]}
                correctAnswer="went"
                correctFeedback="Correct! 'Go' is an irregular verb, and its past tense form is 'went'."
                incorrectFeedback="Incorrect. 'Go' is an irregular verb. We don't add -ed to form its past tense. The correct past tense form is 'went'."
              />

              <ExerciseItem
                id="5"
                question="2. She <span class='font-medium'>(study)</span> for three hours last night."
                choices={["studied", "studyed"]}
                correctAnswer="studied"
                correctFeedback="Correct! When a verb ends in consonant + y, we change the y to i and add -ed."
                incorrectFeedback="Incorrect. When a verb ends in consonant + y, we change the y to i and add -ed: 'studied'."
              />

              <ExerciseItem
                id="6"
                question="3. They <span class='font-medium'>(make)</span> dinner for everyone at the party."
                choices={["maked", "made"]}
                correctAnswer="made"
                correctFeedback="Correct! 'Make' is an irregular verb, and its past tense is 'made'."
                incorrectFeedback="Incorrect. 'Make' is an irregular verb. The correct past tense form is 'made', not 'maked'."
              />
            </div>
          </GrammarCard>
        </section>

        {/* Pronunciation Section */}
        <section id="pronunciation" className="mb-12">
          <div className="section-header mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary inline-flex items-center">
              <i className="fa-solid fa-microphone mr-3"></i>
              Pronunciation
            </h2>
            <div className="h-1 w-20 bg-primary mt-2"></div>
          </div>

          <ComingSoon
            icon="fa-solid fa-microphone-lines"
            title="Pronunciation Content Coming Soon"
            description="We're developing lessons on English sounds, intonation, and accent reduction. Check back soon for interactive pronunciation exercises!"
          />
        </section>

        {/* Fluency Section */}
        <section id="fluency" className="mb-12">
          <div className="section-header mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary inline-flex items-center">
              <i className="fa-solid fa-comments mr-3"></i>
              Fluency
            </h2>
            <div className="h-1 w-20 bg-primary mt-2"></div>
          </div>

          <ComingSoon
            icon="fa-solid fa-comments"
            title="Fluency Content Coming Soon"
            description="We're creating conversation practice materials, speaking exercises, and fluency-building activities. Stay tuned for updates!"
          />
        </section>

        {/* Vocabulary Section */}
        <section id="vocabulary" className="mb-12">
          <div className="section-header mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary inline-flex items-center">
              <i className="fa-solid fa-book-open mr-3"></i>
              Vocabulary
            </h2>
            <div className="h-1 w-20 bg-primary mt-2"></div>
          </div>

          <ComingSoon
            icon="fa-solid fa-book-open"
            title="Vocabulary Content Coming Soon"
            description="We're building comprehensive vocabulary lists, flashcards, and word-building exercises. Come back soon to expand your English vocabulary!"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
