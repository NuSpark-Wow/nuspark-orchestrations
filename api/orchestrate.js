// NuSpark Orchestration Builder — server function (Vercel)
// Needs ONE environment variable in Vercel: ANTHROPIC_API_KEY (preferred) or OPENAI_API_KEY.
const SOL = [
 // [name, url, side (b=B2B, c=B2C, x=both), what it does]
 ["NuSpark GTM-Blueprint","https://nusparkmarketing.com/go-to-market-ai-solutions/","b","AI-guided go-to-market strategy"],
 ["NuSpark AI Growth Accelerator","https://nusparkmarketing.com/ai-growth-accelerator/","b","300+ AI marketing and sales tools"],
 ["NuSpark AI Growth Accelerator-B2C","https://nusparkmarketing.com/ai-growth-accelerator-b2c/","c","AI tools for B2C messaging, offers, content and campaign support"],
 ["NuSpark HumanSDR","https://nusparkmarketing.com/human-sdr-alliance/","b","Human-led SDR outreach and appointment setting"],
 ["NuSpark AI-LeadMagnet","https://nusparkmarketing.com/ai-lead-magnet/","b","AI-powered lead magnet creation"],
 ["NuSpark Custom Content Pro","https://nusparkmarketing.com/ai-lead-magnet-development-process/","b","AI-driven eBook and targeted content creation"],
 ["NuSpark Nurture","https://nusparkmarketing.com/nurture-workflow-builder/","b","Nurture sequences for captured leads between capture and the CRM: speeds up when a lead shows buying behavior and hands off to sales at a lead score threshold"],
 ["NuSpark LeadGlobal","https://nusparkmarketing.com/ai-global-lead-gen-solution/","b","Global lead generation"],
 ["NuSpark CRO-Plus","https://nusparkmarketing.com/cro-plus-drive-more-site-leads/","b","Converts high-intent website visitors with targeted experiences"],
 ["NuSpark Webinar Trust","https://nusparkmarketing.com/webinar-engagement-solution/","b","Live and on-demand webinars to educate, engage and support follow-up"],
 ["NuSpark Cold Optimizer","https://nusparkmarketing.com/cold-email-setup-tool/","b","Cold-email infrastructure and deliverability"],
 ["NuSpark Email-Verify","https://nusparkmarketing.com/email-verification-tool/","b","Verifies email data and protects deliverability"],
 ["NuSpark MediaBuyerB2B","https://nusparkmarketing.com/b2b-media-buying/","b","B2B digital media buying"],
 ["NuSpark PlatformLeads","https://nusparkmarketing.com/social-media-lead-generation/","b","In-platform social lead gen on LinkedIn, Meta, Reddit, YouTube"],
 ["NuSpark NativeAd","https://nusparkmarketing.com/native-advertising-lead-gen/","b","Native advertising lead generation"],
 ["NuSpark Content Syndication","https://nusparkmarketing.com/content-syndication-lead-generation/","b","Pay-per-lead eBook downloads through trade journals and newsletters"],
 ["NuSpark Retargeting-IQ","https://nusparkmarketing.com/lead-retargeting-solution/","b","Retargets website visitors and CRM audiences"],
 ["NuSpark SalesEdgeAI","https://nusparkmarketing.com/sales-message-and-role-play-ai-tools/","b","AI sales tools for outreach messaging and role-play"],
 ["NuSpark SalesEngage","https://nusparkmarketing.com/sales-engagement-platform/","b","Multi-channel sales prospecting and outreach"],
 ["NuSpark ABM-Ace","https://nusparkmarketing.com/account-based-marketing-tool/","b","AI-driven account-based outreach to priority accounts and buying teams"],
 ["NuSpark TradeShow Lead+","https://nusparkmarketing.com/trade-show-lead-gen-platform/","b","Trade-show lead capture, AI follow-up content and event reporting"],
 ["NuSpark Enrich","https://nusparkmarketing.com/robust-data-enrichment-platform/","b","Prospect data and email accuracy"],
 ["NuSpark LinkedIn Outreach-Plus","https://nusparkmarketing.com/linkedin-outreach-with-ai/","b","LinkedIn outreach and engagement funnels"],
 ["NuSpark SalesIgniter","https://nusparkmarketing.com/sales-audit-systems/","b","Sales audit and fractional sales leadership"],
 ["NuSpark LeadScore","https://nusparkmarketing.com/nuspark-leadscore/","b","Lead scoring and prioritization"],
 ["NuSpark Video-Trust","https://nusparkmarketing.com/video-engagement-solution/","b","Personalized video in sales outreach and nurture"],
 ["NuSpark Intent","https://nusparkmarketing.com/external-signal-buyer-intent-solution/","b","Buyer intent data and signal aggregation"],
 ["NuSpark Company Trigger-Signals","https://nusparkmarketing.com/company-funding-signal-solution/","b","Company events and trigger activity for timely outreach"],
 ["NuSpark LinkedIn Signals","https://nusparkmarketing.com/linkedin-signal-solutions/","b","LinkedIn activity and engagement targeting"],
 ["NuSpark Google Signals","https://nusparkmarketing.com/google-ad-signals/","b","Google Ads targeting using behavioral signals"],
 ["NuSpark VisitorID","https://nusparkmarketing.com/website-visitor-id-solution/","b","Identifies companies visiting the website for follow-up"],
 ["NuSpark Signal Outreach Pro","https://nusparkmarketing.com/ai-signal-outreach-message-planning/","b","Turns buyer signals into personalized outreach"],
 ["NuSpark Cold Email Customizer","https://nusparkmarketing.com/cold-email-customizer-2/","b","Signal-driven cold email personalization and workflow"],
 ["NuSpark SaaSGrowth","https://nusparkmarketing.com/saas-lead-generation-overview/","b","SaaS lead generation across the full buyer journey"],
 ["NuSpark SaaS SalesPlus","https://nusparkmarketing.com/saas-mrr-arr-data-analyzer/","b","SaaS revenue and retention analysis"],
 ["NuSpark SaaS Retain","https://nusparkmarketing.com/saas-customer-retention-tool/","b","Customer health, adoption and churn risk"],
 ["NuSpark Smart Search","https://nusparkmarketing.com/paid-search-lead-generation/","x","Paid search capturing people actively searching"],
 ["NuSpark Performance Max","https://nusparkmarketing.com/google-ads-signal-targeting/","x","Google Performance Max across Google inventory and audience signals"],
 ["NuSpark DiscoverDemand","https://nusparkmarketing.com/google-ads-mobile-discovery-ads/","x","Google Discover ads reaching people by interests and search behavior"],
 ["NuSpark MediaBuyerB2C","https://nusparkmarketing.com/advertising-media-b2c/","c","Multi-channel consumer media planning and buying"],
 ["NuSpark TVMediaBuy","https://nusparkmarketing.com/television-media-buying-2/","c","Broadcast, cable, CTV, OTT and YouTube media buying"],
 ["NuSpark TV-Results","https://nusparkmarketing.com/television-lead-generation/","c","TV lead generation: QR codes by segment, SMS opt-in, guide offers, response tracking"],
 ["NuSpark RadioLeadGen","https://nusparkmarketing.com/radio-lead-generation/","c","Radio and audio campaigns built for consumer response"],
 ["NuSpark Engage360","https://nusparkmarketing.com/b2c-customer-aquistion-programs/","c","Umbrella B2C customer engagement system: text message workflows, mobile coupons and promo codes, loyalty, referrals and retention, reviews and reputation, testimonial gathering"],
 ["NuSpark Hand-Off","https://nusparkmarketing.com/leads-to-sales-hand-off/","b","Routes scored hot leads, buying signals and weekly results to sales, leadership or marketing through chat, the CRM or email"],
 ["NuSpark Customer Proof","https://nusparkmarketing.com/video-testimonial-platform/","b","Collects and displays text and video testimonials on the website and landing pages"],
 ["NuSpark Persuader","https://nusparkmarketing.com/website-lead-capture-program/","x","Website messaging, trust, offers and conversion paths"],
 ["NuSpark Custom Lander","https://nusparkmarketing.com/ai-signal-custom-landing-pages/","x","Audience- and offer-specific landing pages"],
 ["NuSpark Results Optimizer","https://nusparkmarketing.com/attribution-modeling-solution/","x","Conversion attribution connecting campaigns to revenue"],
 ["NuSpark RevAnalyzer","https://nusparkmarketing.com/revenue-funnel-analytics-platform/","b","Pipeline and campaign performance tracking"],
 ["NuSpark Funnel-Results","https://nusparkmarketing.com/sales-reporting-solution/","b","Revenue-funnel and CRM progression reporting"],
 ["NuSpark Link Tracker","https://nusparkmarketing.com/url-utm-campaign-tracking/","b","UTM tracking and campaign attribution"]
];

const PARTNER = {};
const SHARED_TOOLS = "Agenda Architect; AI Marketing Meeting; AI Sales Meeting; Brand Positioning Pro; Buyer Persona Builder; Customer Journey Guide; Feature-Benefit-Outcome Matrix; Go-To-Market Strategy Planner; iPaaS Workflow Automation Pro; Market Trend Buddy; My Fractional CMO; NuSpark Workflow Advisor; Pain Point Message Guide; Problem-Solution Guide; Target Pain Point Guide; Upside Down Funnel Plan; USP Refiner; Value Prop Guide; Who Needs You and Why?; Who's My Target; Ad Copy Wizard; Ad Evaluator; Ad Script Wizard; Banner Ad Writer; Chat GPT  Ads Copy Builder; Creative Ad Studio; Digital Ad Crafter; Digital Lead Gen Copy Helper; Make Me Click-Convert; Master Ad Specs; Media Tactic Analyst; My AI Creative Director; Native Ad Copywriter; Offer/Sale Builder Pro; Promo Assistant; Social Ad Teaser; U Tube Video scripter; UTM Builder; You Video Tube-  Don't Skip- Teasers; ChatBot Scripter; Educate Your Audience; eNewsletter Curator; Free Mini Guide Creator; Humanize and Personalize; Message Strategy Guru; Storytelling Copy Enhancer; Text Message Marketer; Voiceover Scripter; VSL Script Master; CRM Follow-up Messenger; Custom Email Pro; eBlast Email Crafter; Email Anti-Spam Rewrite; Email Funnel Topic Planner; Email Marketing Guru; Email Subject Line Styler; Follow-Up Email Series; Improve InBox Delivery; Info Guide Email Writer; Lead Funnel Architect; Nurture Email Copy Wizard; Open My Nurture Email; Personal and Passionate Outreacher; Proof Message Wizard; Sales Follow-Up Genius; Sales Message Architect; Subject Line Wizard; Teaser Genius; Welcoming Email Assistant; eBook Ghoster; eBook Outline Planner; Educational Guide Planner; Info Guide Landing Page Builder; Info Guide Planner; Info Guide Writer; Lead Gen Guide Preview; Lead Magnet Ad Crafter; Lead Magnet Ad Headline Guide; Lead Magnet eBlast Crafter; Lead Magnet Lander Pro; Lead Magnet PPC Planner; Lead Magnet Type & Topic Planner; Lead Magnet/Guide/eBook-Conversion Calculator; Topic to Follow-up Guide Planner; Webinar Topic Planner; Paid Search eBook Lead Planner; Paid Search Strategy Pro; Paid Search-Lead Magnet Ace; PPC Ad Writer; PPC Educate First; PPC Keyword Compiler; PPC Keyword Long-Tail Finder; PPC Keyword Scout; PPC Lead Magnet Topic Guide; PPC Negative Keyword Genius; Search Engine Use Intent; Site Link Builder for PPC; Why They Search You; Ad & Marketing Data Guru; Advertising Strategy Star; Conversion Attribution Calculator; GA4-GTM Conversion Guide; Looker Studio Trainer; Marketing Analytics Guru; Media Buying Analyst; Media Director Guru; Media Planner; Media Tracking Guide; Meta Lead Gen Guide; Paid Media Option Guide; Meta Ad Writer Pro; Social Calendar Creator; Social Media  Ad Pro; Social Media Ad Image Wiz; Social Media Video Guide; Social Post Ideator; Case Study Writer; Conversion Measurement Maven; Conversion Rate Advisor; Landing Page Analyzer; Landing Page Copy Expert; Landing Page Focus Buddy; Landing Page Quality Scorer; Landing Page Transformer; Persuasion Evaluator; Testimonial Ghoster; Web Copy: What's In it for Me?; Web Form Feedback Expert; Website Persuasion Audit; Website Conversion Tools; Revenue Profit Effect Scenario; Sales Success Coach";
const B2B_TOOLS = "B2B Funnel Advisor; B2B Target Overview; Company Insight Assistant; Executive Compass; Manufacturing Maven; The Short List-B2B General; The Short List-B2B Sales; The Short List-Manufacturing; The Short List-SaaS Company; B2B Ad Theme Guide; B2B Promo Option Guide; Make Me Click: B2B; B2B Text Message Planner; ABM Message Assistant; B2B Email Composer; B2B Email Writer Wizard; B2B-Lead Capture Nurture Cadence; Cold Email Demo-Trial-Free-Offer; Cold Email Funnel Copy Wizard; Cold Funnel Architect; Cold-Email-Lead Magnet; Email Trigger Outreach; Funded Firm Messager; Meeting Follow-Up Creator; Open My Cold Email; Cold Email Template Master; LI Boolean Search Helper; LI Connection Funnel; LI Connector Coach; LI ICP Connection Funnel; LI Message Ad Pro; LI Profile Optimizer; LI Prospect Appointment Wiz; LI Sales Navigator Ace; LI Trigger Outreach Funnel; NuSpark Signal Guide; Signal Landing Page Pro; Signal Outreach Messenger; Signal Outreach Planner; Signal to Message Alerts; Social Media LI Ad Maker; B2B eBook Outline Planner; B2B eBook Topic Guide; Industrial eBook Ghoster; Industrial eBook Planner; White Paper Ghoster; White Paper Title Generator; Churn Challenger; Lead Magnet Calculator Wiz-SaaS; SaaS Content Planner; SaaS eBook Ghoster; SaaS Follow-Up Guide; SaaS Growth Guru; SaaS Lead Gen Demo Pro; SaaS Lead Gen Trial Pro; SaaS Lead Gen White PaperTopic Pro; SaaS Trial to Buyer Pro; SaaS-Lead Capture Nurture Sequence; B2B CRM Reporter; B2B Pipeline Calculator Wiz; BANT Buddy; Buyer-Seller Q&A; Company Research Detail GPT; Convention-Trade Show Finder; Corporate Demo Advocate; Dig Deeper Role Play; Insight Seeker; Lead Magnet Calculator Wiz-B2B; MSP Firm Sales Guide; SaaS CRM Reporter; Sales Coach Pro; Sales Engagement Coach; Sales Objection Matrix; Sales Objection Mentor; Sales Outreach Pro; Sales Persona Messenger; Sales Texting Guide; Sales Trainer GPT; Sales Voicemail Guide; Sell to the B2B CEO; Sell to the CFO; Social Media B2B-Make Me Like";
const B2C_TOOLS = "Ecommerce Growth Pro; Higher Ed Marketer; Insurance Marketing Advisor; Retail Franchise Marketer; Sell to the B2C CEO; The Short List-B2C Businesses; B2C Ad Theme Guide; B2C Promo-Offer Guide; B2C Promotion Plan Guide; DRTV Storyboard-Script Pro; DTC Target Me; Make-Me-Click-DTC-Offer; TV or Radio Script Wiz; B2C Text Message Planner; B2C Offer Writer; B2C eBook Outline Planner; B2C eBook Topic Guide; Higher Ed Lead Gen Guide; Insurance Lead Gen Guide; Make Me Click-DTC-eBook; Radio Advertising Pro; Television Advertising Pro; Social Media B2C-Make Me Like";
const PLAYBOOK_B2B = `- Strategy & Planning: Go-to-market planning > growth platform assessment > current KPI review > audience, offer & messaging fit > gap identification > revenue alignment
- Behind the Scenes (setup before any launch): cold email tech setup > email/domain warm-up > ad/email link tracker setup > data enrichment > email verification > GA4 key event setup
- Content & Thought Leadership: AI-generated lead magnets > video outreach tools > webinar creation > accelerated content development > personalized sales engagement > trust & education approach
- Demand Generation: lead generation strategy > match lead magnets to targets > share magnets across channels > align campaigns to funnels > inbound & outbound tactics > lead scoring
- Media & Advertising: paid search for leads > in-platform lead gen > account-based marketing > retargeting/geofencing > eNewsletters/eBlasts > global lead gen
- Website & Conversion: website conversion optimization > custom targeted landing pages > testimonial capturing > trust & proof audit > exit pop-up lead forms > feature-benefit-outcome copy review
- Signals & Buyer Intelligence: intent and signal management > custom outreach by signal > GTM prioritization plan > targeted messaging with AI > website visitor ID > custom landing pages
- Workflow & Funnel Management: custom workflows/funnels > align campaigns with CRM > choose AI or human SDR > follow-up programs > cold, nurture, and trigger flows > workflow results optimization
- Sales & Outreach: LinkedIn profile tweaks > strategic LinkedIn outreach > trade show lead capture > personalized sales messages > align CRM, intent, and outreach tools > AI role-play and coaching
- Measurement & Optimization (only when asked): lead & sales attribution > demand gen reports > pipeline analysis > campaign optimization > link tracking > growth & revenue insights`;
const PLAYBOOK_B2C = `- Strategy & Planning: customer & market insight > goals & growth strategy > brand, messaging & offer plan > channel & campaign roadmap > budget, resources & timeline > success metrics & KPIs
- Customer Acquisition: audience targeting > offer planning > paid media plan > landing pages > budget allocation > testing plan
- Performance Media Buying (channels): paid search, digital channels (social, display, video), TV/cable/CTV/OTT, radio/streaming audio, out-of-home, direct mail
- AI-Powered Content: educational guides > email/text copy > social posts > landing page content > video & ad copy > personalized assets by target
- Website Conversion & Capture: message focus & clarity > promo/discount codes > reviews & ratings > testimonial proof > trust factors > video where needed
- Measurement & Optimization (only when asked): conversion/event assessment > attribution models > QR code tracking > form and call tracking > campaign reporting > ongoing ROAS/ROI optimization`;
const toList = s => s.split(";").map(t=>t.trim()).filter(Boolean);
const TOOLS = { b2b: toList(SHARED_TOOLS + ";" + B2B_TOOLS), b2c: toList(SHARED_TOOLS + ";" + B2C_TOOLS) };

const SIDES = [["b2b","B2B"],["b2c","B2C"]];
const CATS = {
  b2b:[["paid","Paid Media"],["gtm","GTM / Cold Outbound"],["saas","SaaS"],["custom","Your Scenario"]],
  b2c:[["paid","Paid Media"],["tv","TV & CTV"],["local","Local / Lead Gen"],["custom","Your Scenario"]]
};
const RANGES = [["top","Top → Mid"],["bottom","Mid → Bottom"],["full","Full 12"]];

const labelOf = (list,v) => (list.find(x=>x[0]===v)||[])[1]||v;
function solutionsFor(side){
  return SOL.filter(s => s[2]==="x" || s[2]===(side==="b2b"?"b":"c"));
}

function buildPrompt(p){
  const answersText = (Array.isArray(p.answers)?p.answers:[]).filter(x=>x&&x.a).slice(0,3).map(x=>"Q: "+String(x.q).slice(0,300)+"\nA: "+String(x.a).slice(0,400)).join("\n");
  const previous = (Array.isArray(p.previous)?p.previous:[]).slice(0,2).map(x=>String(x).slice(0,300));
  const side = p.side, sideName = side==="b2b"?"B2B":"B2C";
  const cat = labelOf(CATS[side], p.cat);
  const scenario = String(p.scenario||"").slice(0,600);
  const range = p.range;
  const rangeRule = p.cat==="custom"
    ? "Match the visitor's request exactly. If they ask for a specific number of emails, touches, or steps, produce exactly that many numbered steps, each one being that item in sequence (for emails, give each a send day like 'Day 0', 'Day 3' as its timing). If they name no number, use 6 to 12 steps. Put any setup that must happen before step 1 can run (domains, inboxes, warm-up, list verification, tracking, landing page) in \"prep\" as 2-5 short items instead of numbered steps; leave prep empty if nothing is needed."
    : range==="top"
    ? "Show steps 1 through 6 only: TOP to MID funnel, marketing only. Start at defining the audience and end when prospects are scored, nurtured, and ready for sales."
    : range==="bottom"
    ? "Show steps 7 through 12 only: MID to BOTTOM funnel, marketing handing off to sales. Start at the handoff of warm, engaged prospects and end with a loop that reports results back to marketing."
    : "Show the full 12 steps from TOP to BOTTOM: steps 1-6 are marketing (top to mid), steps 7-12 are marketing to sales (mid to bottom), and step 12 closes the loop back to marketing.";
  const b2cRule = side==="b2c" ? "This is B2C. 'Sales' means a purchase, booking, appointment, or phone call. The final step focuses on repeat customers, reviews, and referrals. For TV & CTV, use Paul's loop: a unique QR code per TV audience tied to an SMS keyword, two doors (a deal for ready buyers, a guide for not-ready ones), then nurture." : "";
  const prev = previous.length
    ? "Earlier examples already shown for these same choices (take a clearly DIFFERENT route this time, with a different channel mix, buyer angle, offer, or sequence):\n- " + previous.join("\n- ")
    : "";
  const sols = solutionsFor(side).map(s=>"- "+s[0]+": "+s[3]).join("\n");
  return `You are writing a sample revenue orchestration for the website of NuSpark Marketing, run by founder Paul Mosenson, a revenue orchestrator with 30+ years in media buying, lead generation, and growth strategy.

Market: ${sideName}
Category: ${cat}
${p.cat==="custom" ? "Visitor's scenario: " + scenario + (answersText ? "\nVisitor's answers to clarifying questions:\n" + answersText : "") : ""}
${rangeRule}
${b2cRule}
${prev}

RULES
- Only include workflows Paul manages: paid media, TV/CTV/radio, outbound email and LinkedIn, signals and intent, lead magnets and content, landing pages and website conversion, nurture, lead scoring, sales enablement and handoff, CRM follow-up, and reporting.
- NEVER include SEO, GEO, AEO, AIO, or AI search visibility steps. If the visitor's scenario asks for them, leave those steps out and set "alliance": true.
- Include measurement and optimization steps ONLY if the visitor's scenario asks for them. Otherwise keep reporting limited to the final loop-back step.
- Each step needs: a short action title (under 9 words); "why", a plain-English rationale of 1-2 sentences explaining why this step matters for revenue; 1 or 2 NuSpark solutions copied EXACTLY from the solution list; 1 to 3 AI tools copied EXACTLY from the tool list.
- For B2B nurture steps (moving captured leads toward sales) use NuSpark Nurture. When scored leads are passed to sales, use NuSpark Hand-Off.
- NuSpark Engage360 is the umbrella for B2C text messaging, mobile coupons and promo codes, loyalty, referrals, reviews and testimonials.
- NEVER name third-party software, vendors or partner platforms anywhere in the output (for example Apollo, Clay, HubSpot, Salesforce, GoHighLevel, SlickText, Mobly). Describe what gets done and credit it to the NuSpark solution. Ad channels and media (Google, LinkedIn, Meta, YouTube, TV, CTV, radio) may be named.
- Write plainly and specifically, like an experienced practitioner. No hype, no exclamation points, no phrases like "it's worth noting" or "unlock".
- Make the steps concrete to the category${p.cat==="custom" ? " and the visitor's scenario" : ""}.

PAUL'S DEFAULT SEQUENCES (from his website). When the visitor gives no specific details (a standard category, a vague scenario, or skipped questions), use these as the default: build from the matching sequences and keep their steps and order closely, adding only the setup needed before launch. When the visitor gives specific details, treat these as examples of Paul's logic and adapt them to fit the request:
${side==="b2b" ? PLAYBOOK_B2B : PLAYBOOK_B2C}

THIS IS AN ORCHESTRATION, NOT A LIST OF SOLUTIONS
- Steps must follow the real operating order Paul would run them in. Each step must depend on, or build on, the step before it. Never list solutions side by side as a menu.
- Include the setup work that has to happen before anything launches. Examples by category:
  - Cold outbound / GTM: define ICP and signals, then build and enrich the list, then verify emails, then buy secondary domains and set up inboxes with SPF/DKIM/DMARC and warm them up (allow 2-3 weeks), then write the offer and messaging, then launch sequences, then handle replies and book meetings.
  - Paid media: install tracking first (pixels, GA4 conversions, UTMs, CRM fields), build the landing page and offer before ads run, then launch, then retarget, then nurture.
  - TV & CTV: set up the unique QR codes and SMS keywords per TV audience and the landing pages before the spots air, then air, then capture opt-ins, then nurture by text and email.
  - SaaS: define the trial or demo path and onboarding emails before driving traffic to it.
  - Any category: CRM routing, lead scoring rules, and the sales handoff process are set up before leads arrive, not after.
- For a Mid → Bottom range, assume the top-funnel setup is done, but still set up the handoff, routing, and follow-up before outreach begins.
- Add "timing" to each step: a short phase label showing when it happens, e.g. "Weeks 1-2", "Week 3", "Before launch", "Ongoing".

NUSPARK SOLUTION LIST (use exact names only):
${sols}

AI TOOL LIST (use exact names only):
${TOOLS[side].join("; ")}

Reply with only JSON in this shape:
{"title":"short name for this orchestration","angle":"one sentence on the route this example takes","alliance":false,"prep":[{"title":"...","solutions":["NuSpark ..."]}],"steps":[{"n":1,"stage":"Top","timing":"Weeks 1-2","title":"...","why":"...","solutions":["NuSpark ..."],"tools":["..."]}]}
"stage" is "Top", "Mid", or "Bottom". Number steps with their real position (1-12).`;
}


function questionsPrompt(p){
  const sideName = p.side==="b2c"?"B2C":"B2B";
  return `A visitor on NuSpark Marketing's website wants a sample ${sideName} marketing orchestration for this request:
"${String(p.scenario||"").slice(0,600)}"

Ask up to 3 short clarifying questions that would most change the plan, such as who the audience or industry is, what the offer is, what is already in place (domains, CRM, list), or how many steps or emails they want. Skip anything the request already answers. If it is already specific enough, return an empty list.
Reply with only JSON: {"questions":[{"q":"question","example":"short example answer"}]}`;
}

function parseJSON(text){
  try { return JSON.parse(text); } catch(e){}
  const f = text.match(/```(?:json)?\s*([\s\S]*?)```/); if (f) { try { return JSON.parse(f[1]); } catch(e){} }
  const i = text.search(/[\{\[]/), j = Math.max(text.lastIndexOf("}"), text.lastIndexOf("]"));
  if (i>=0 && j>i) { try { return JSON.parse(text.slice(i,j+1)); } catch(e){} }
  return null;
}

async function askModel(prompt, quick){
  if (process.env.ANTHROPIC_API_KEY){
    const model = quick ? (process.env.QUICK_MODEL||"claude-haiku-5-5") : (process.env.MODEL||"claude-sonnet-5-5");
    const r = await fetch("https://api.anthropic.com/v1/messages",{method:"POST",
      headers:{"x-api-key":process.env.ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01","content-type":"application/json"},
      body:JSON.stringify({model, max_tokens: quick?800:6000, messages:[{role:"user",content:prompt}]})});
    const j = await r.json();
    if (!r.ok) throw new Error("anthropic "+r.status+": "+JSON.stringify(j).slice(0,300));
    return (j.content||[]).filter(c=>c.type==="text").map(c=>c.text).join("");
  }
  if (process.env.OPENAI_API_KEY){
    const model = quick ? (process.env.QUICK_MODEL||"gpt-5.4-mini") : (process.env.MODEL||"gpt-5.4");
    const r = await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",
      headers:{"authorization":"Bearer "+process.env.OPENAI_API_KEY,"content-type":"application/json"},
      body:JSON.stringify({model, response_format:{type:"json_object"}, messages:[{role:"user",content:prompt}]})});
    const j = await r.json();
    if (!r.ok) throw new Error("openai "+r.status+": "+JSON.stringify(j).slice(0,300));
    return j.choices?.[0]?.message?.content||"";
  }
  throw new Error("No API key set");
}

// light per-instance rate limit: 20 calls per IP per 10 minutes
const hits = new Map();
function limited(ip){
  const now=Date.now(), w=10*60*1000, arr=(hits.get(ip)||[]).filter(t=>now-t<w);
  arr.push(now); hits.set(ip,arr); return arr.length>20;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") { res.status(405).json({code:"method"}); return; }
  const ip = String(req.headers["x-forwarded-for"]||"").split(",")[0].trim()||"x";
  if (limited(ip)) { res.status(429).json({code:"rate_limited"}); return; }
  let p = req.body; if (typeof p === "string") { try { p = JSON.parse(p); } catch(e){ p = {}; } }
  p = p||{};
  p.side = p.side==="b2c" ? "b2c" : "b2b";
  if (!CATS[p.side].some(c=>c[0]===p.cat)) p.cat = "paid";
  if (!["top","bottom","full"].includes(p.range)) p.range = "full";
  try{
    const quick = p.mode==="questions";
    const prompt = quick ? questionsPrompt(p) : buildPrompt(p);
    const text = await askModel(prompt, quick);
    const data = parseJSON(text);
    if (!data) { res.status(502).json({code:"invalid_json"}); return; }
    res.status(200).json({data});
  }catch(e){
    console.error(e);
    res.status(500).json({code:"upstream_error"});
  }
};
