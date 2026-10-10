/* Where the enquiry is posted. Point this at your own endpoint (API route,
   form service, etc.). The form is plain HTML with native validation, so it needs
   no client JavaScript and the component stays a server component. */
const FORM_ACTION = "/api/enquiry";

const CONTACT = {
  name: "Arjun Naik",
  phone: "+91 78998 01210",
  email: "arjun@himalayanhaulers.com",
  locations: "HQ: Bangalore · Manufacturing: Tirupati",
};
 
const INTERESTS = [
  "Buy a drone",
  "Logistics Drone as a Service",
  "Drone inspection",
  "Tower stringing",
  "Survey & sensing",
  "Defence",
  "Other",
];

const INDUSTRY_OPTIONS = ["Power", "Energy", "Defence", "Construction", "Other"];

/* White left, navy right — each half paints its own, giving a full-bleed split.
   --content-pad is --hero-left, which keeps the left text on the same vertical
   line as the navbar logo and hero headline.

   Type sizes use the BASE scale from globals.css (same as Hero), so this section
   matches Hero's type at every level (heading, standfirst, item title, body, small).

   RESPONSIVE MAP (everything below is fluid between these steps, via clamp()):
     > 900px   two equal columns, left and right level top and bottom
     <= 900px  one column: text first, then the navy panel with the form
     <= 600px  headline may wrap; panel padding tightens
     <= 560px  form fields go single-column; inputs hit 16px (no iOS zoom) */
const SECTION = "[animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]";

/* min-w-0 on the children (below) lets a column shrink instead of being held
   open by a long email address or the nowrap headline. */
const LAYOUT = "grid grid-cols-2 max-[900px]:grid-cols-1";

/* ---- Left: white ------------------------------------------------------------- */

/* Vertical padding matches the navy panel's (both are --section-pad, the same
   rhythm every section uses), so the two halves stay level at the top edge and
   neither column is taller than it needs to be. */
const LEFT =
  "flex min-w-0 flex-col bg-white text-[color:var(--blue)] py-[length:var(--section-pad)] pl-[length:var(--content-pad)] pr-[clamp(20px,4vw,64px)]";

const EYEBROW =
  "m-0 mb-[clamp(10px,1.4vw,20px)] text-[length:var(--fs-small)] font-bold tracking-[0.12em] uppercase text-[color:var(--cyan)]";

/* The shared h2 size, identical to the Industries heading. At this size the
   sentence takes two lines in a half-width column; text-balance keeps the break
   even. */
const HEADLINE = "m-0 text-4xl uppercase text-pretty";

const TEXT =
  "mt-[clamp(12px,1.8vw,24px)] mb-0 max-w-[44ch] text-[length:var(--fs-lead)] leading-[1.38] text-[color:var(--blue)]/75 text-pretty";

const DETAILS =
  "m-0 p-0 flex flex-col gap-[clamp(12px,1.6vw,22px)] not-italic";

/* break-words lets the long email wrap on a narrow screen instead of pushing the
   page sideways. */
const DETAIL_LINE =
  "m-0 text-[length:var(--fs-body)] leading-[1.35] text-[color:var(--blue)]/80 break-words";

const DETAIL_LINK =
  "text-[color:var(--blue)] underline decoration-[color:var(--blue)]/30 underline-offset-4 transition-colors hover:decoration-[color:var(--cyan)] focus-visible:decoration-[color:var(--cyan)]";

/* ---- Right: navy panel, white form card ------------------------------------- */

/* The panel pads the card on all four sides, and the card is centred so the navy
   frames it evenly. `items-start` rather than `items-stretch`: the card is as
   tall as its form needs, instead of being pulled to match the taller left half.
   That is what was making the form read as oversized — the extra height came
   from the stretch, not from the fields. Horizontal padding tightens on small
   screens to give the card room. */
const RIGHT =
  "flex min-w-0 items-start bg-[color:var(--blue)] py-[length:var(--section-pad)] px-[clamp(12px,3vw,48px)]";

const CARD =
  "mx-auto w-full max-w-[720px] rounded-lg bg-white text-[color:var(--blue)] px-[clamp(20px,2.5vw,36px)] py-[clamp(28px,3.5vw,48px)] shadow-[0_2px_4px_rgba(0,0,0,0.08),0_20px_44px_rgba(0,0,0,0.2)]";

/* Rows keep their natural height and the gap is the space between them. There is
   deliberately no `content-between` here: the card no longer stretches, so
   spreading rows would only add gaps that grow with the left column again. */
const FORM =
  "grid grid-cols-2 gap-[clamp(14px,2.4vw,28px)] max-[560px]:grid-cols-1";

const FIELD = "flex min-w-0 flex-col gap-[0.3em]";

const FULL = "col-span-2 max-[560px]:col-span-1";

const LABEL =
  "truncate text-[length:var(--fs-body)] font-semibold tracking-normal normal-case text-[color:var(--blue)]/80";

/* Underline-only fields. The rule goes cyan on focus; the default outline is
   replaced by that rule plus a 1px cyan shadow, so keyboard focus stays visible.
   16px at phone width stops iOS zooming the page when a field is focused. */
const CONTROL =
  "w-full min-w-0 rounded-none border-0 border-b border-solid border-[color:var(--blue)]/30 bg-transparent px-0 py-[0.35em] text-[length:var(--fs-body)] text-[color:var(--blue)] outline-none transition-colors placeholder:text-[color:var(--blue)]/40 focus:outline-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none max-[560px]:text-[16px]";

const SELECT = `${CONTROL} appearance-none cursor-pointer pr-[1.5em] bg-[length:0.6em] bg-[position:right_0.2em_center] bg-no-repeat bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%206'%3E%3Cpath%20d='M1%201l4%204%204-4'%20fill='none'%20stroke='%2313294b'%20stroke-width='1.5'/%3E%3C/svg%3E")]`;

/* 4em, not 5em: rows={3} already sets the visible height, so a larger min-height
   only added empty space below the text. */
const TEXTAREA = `${CONTROL} min-h-[4em] resize-y leading-[1.4]`;

/* Ink on cyan is 5.4:1; white on cyan fails at this size. Full width on phones
   so it is an easy tap target. */
const SUBMIT =
  "self-start rounded-[4px] bg-[color:var(--cyan)] px-8 py-[0.6em] text-[length:var(--fs-body)] font-bold tracking-[0.04em] uppercase text-[color:var(--ink)] cursor-pointer transition-[filter,transform] duration-200 hover:brightness-95 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--blue)] max-[560px]:w-full max-[560px]:self-stretch";

const SMALL_PRINT = "m-0 text-[length:var(--fs-small)] text-[color:var(--blue)]/65";

/**
 * "Let's Connect" — full-bleed split: logo, headline and contact details on a
 * white left side; navy right side holding the white enquiry form card.
 *
 * Server component. The form posts natively to FORM_ACTION.
 */
export default function Contact() {
  return (
    <section id="contact" className={SECTION} aria-labelledby="contact-title">
      <div className={LAYOUT}>
        <div className={LEFT}>
          <div className="[animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [container-type:inline-size] flex flex-col gap-[clamp(28px,3.5vw,52px)]">
            <div>
              <p className={EYEBROW}>Let&rsquo;s Connect</p>
              <h2 id="contact-title" className={HEADLINE}>
                Let&rsquo;s Move Something Impossible
              </h2>
              <p className={TEXT}>
                Tell us what you need to carry, inspect or survey, and where.
                Our team will get back with the right drone, the right plan and
                a clear quote.
              </p>
            </div>

            <address className={DETAILS}>
              <p className={DETAIL_LINE}>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className={DETAIL_LINK}
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className={DETAIL_LINE}>
                <a href={`mailto:${CONTACT.email}`} className={DETAIL_LINK}>
                  {CONTACT.email}
                </a>
              </p>
              <p className={DETAIL_LINE}>{CONTACT.locations}</p>
            </address>
          </div>
        </div>

        <div className={RIGHT}>
          <div className={`${CARD} [animation:hh-fade_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:150ms]`}>
            <form className={FORM} action={FORM_ACTION} method="post">
              <div className={FIELD}>
                <label htmlFor="enq-name" className={LABEL}>
                  Full name *
                </label>
                <input
                  id="enq-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={CONTROL}
                />
              </div>

              <div className={FIELD}>
                <label htmlFor="enq-company" className={LABEL}>
                  Company / organisation *
                </label>
                <input
                  id="enq-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  className={CONTROL}
                />
              </div>

              <div className={FIELD}>
                <label htmlFor="enq-email" className={LABEL}>
                  Email *
                </label>
                <input
                  id="enq-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={CONTROL}
                />
              </div>

              <div className={FIELD}>
                <label htmlFor="enq-phone" className={LABEL}>
                  Phone *
                </label>
                <input
                  id="enq-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={CONTROL}
                />
              </div>

              <div className={FIELD}>
                <label htmlFor="enq-interest" className={LABEL}>
                  I&rsquo;m interested in
                </label>
                <select
                  id="enq-interest"
                  name="interest"
                  defaultValue=""
                  className={SELECT}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {INTERESTS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={FIELD}>
                <label htmlFor="enq-industry" className={LABEL}>
                  Industry
                </label>
                <select
                  id="enq-industry"
                  name="industry"
                  defaultValue=""
                  className={SELECT}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {INDUSTRY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`${FIELD} ${FULL}`}>
                <label htmlFor="enq-requirement" className={LABEL}>
                  Tell us about your requirement *
                </label>
                <textarea
                  id="enq-requirement"
                  name="requirement"
                  required
                  rows={3}
                  placeholder="Payload, distance, altitude, location"
                  className={TEXTAREA}
                />
              </div>

              <div
                className={`${FULL} flex flex-col gap-[clamp(12px,1.4vw,18px)]`}
              >
                <button type="submit" className={SUBMIT}>
                  Send Enquiry
                </button>
                <p className={SMALL_PRINT}>
                  We usually reply within one working day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}