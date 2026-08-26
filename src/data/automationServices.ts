export type AutomationService = {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  summary: string;
  problem: string;
  solution: string;
  audience: string[];
  benefits: string[];
  included: string[];
  workflow: { title: string; description: string }[];
  integrationNote: string;
};

export const automationServices: AutomationService[] = [
  {
    slug: "lead-follow-up",
    eyebrow: "Lead response systems",
    title: "Lead Follow-Up Automation",
    headline: "Respond while the opportunity is still warm.",
    summary: "Create a dependable path from new inquiry to the next useful conversation—without relying on someone remembering every follow-up.",
    problem: "New leads arrive while the team is busy. Responses get delayed, context gets lost, and interested prospects quietly move on.",
    solution: "A custom follow-up workflow can capture each inquiry, organize the details, trigger the right next step, and keep a human in control when a real conversation is needed.",
    audience: ["Local service businesses handling calls and web inquiries", "Small sales teams with inconsistent follow-up", "Owner-operators who need a reliable lead queue"],
    benefits: ["Faster first response", "Fewer leads lost between channels", "Clear ownership and next actions", "Consistent follow-up without robotic conversations"],
    included: ["Lead-source and handoff mapping", "Response and follow-up sequence design", "Lead status and next-action tracking", "Human review and escalation points", "Testing, launch support, and workflow documentation"],
    workflow: [
      { title: "Capture", description: "A lead enters through an agreed source such as a form, inbox, or supported CRM." },
      { title: "Organize", description: "The workflow records the useful details and assigns a clear status." },
      { title: "Respond", description: "An approved acknowledgment or task is triggered based on the inquiry." },
      { title: "Follow up", description: "Timed next steps continue until the lead replies, opts out, or needs a person." },
      { title: "Handoff", description: "The owner or team receives the context needed for the conversation." },
    ],
    integrationNote: "Channels, CRM connections, and message delivery are configured only after access and supported APIs are confirmed.",
  },
  {
    slug: "appointment-scheduling",
    eyebrow: "Scheduling workflows",
    title: "Appointment Scheduling Automation",
    headline: "Make booking easier without losing control of the calendar.",
    summary: "Reduce the back-and-forth around appointments with a scheduling flow designed around your availability, services, and customer handoffs.",
    problem: "Scheduling often means repeated messages, missed details, double-checking availability, and chasing confirmations or reschedules.",
    solution: "A custom scheduling workflow can guide customers to the right appointment, collect the necessary information, send reminders, and route exceptions to a person.",
    audience: ["Contractors and field-service businesses", "Consultants and appointment-based professionals", "Teams coordinating multiple service types or calendars"],
    benefits: ["Less scheduling back-and-forth", "Clearer appointment information", "Fewer forgotten confirmations", "A smoother customer booking experience"],
    included: ["Booking rules and availability mapping", "Intake question design", "Confirmation and reminder workflow", "Reschedule and cancellation handling", "Calendar integration when a supported connection is available"],
    workflow: [
      { title: "Request", description: "The customer chooses a service or asks for an appointment." },
      { title: "Qualify", description: "The flow gathers the details needed to offer the right booking path." },
      { title: "Schedule", description: "Available times are offered through the configured calendar process." },
      { title: "Confirm", description: "Both sides receive the appointment details and expectations." },
      { title: "Remind", description: "Approved reminders and exception handling reduce forgotten appointments." },
    ],
    integrationNote: "Real-time calendar availability requires access to a supported calendar or scheduling provider; it is never presented as connected before setup.",
  },
  {
    slug: "customer-follow-up",
    eyebrow: "Customer retention workflows",
    title: "Customer Follow-Up Automation",
    headline: "Stay useful after the job is done.",
    summary: "Build a thoughtful post-service workflow for check-ins, reminders, review requests, and future opportunities without treating every customer the same.",
    problem: "Once work is completed, follow-up becomes easy to forget. Customers miss maintenance reminders, teams lose context, and repeat opportunities arrive too late—or not at all.",
    solution: "A customer follow-up system can schedule the right next contact based on service history, status, and customer preferences, with clear stop conditions and human handoffs.",
    audience: ["Home-service and maintenance businesses", "Professional services with repeat clients", "Businesses that rely on renewals, check-ins, or referrals"],
    benefits: ["Fewer forgotten customers", "More consistent post-service care", "Better timing for reminders and check-ins", "A reusable record of customer follow-up"],
    included: ["Customer lifecycle mapping", "Follow-up timing and message framework", "Consent and stop-condition planning", "Task, reminder, or supported CRM workflow", "Team handoff and exception rules"],
    workflow: [
      { title: "Complete", description: "A job, sale, or customer milestone reaches an agreed status." },
      { title: "Schedule", description: "The appropriate follow-up path is selected using real business rules." },
      { title: "Check in", description: "An approved message or team task is created at the right time." },
      { title: "Listen", description: "Replies, issues, and opt-outs stop automation and route appropriately." },
      { title: "Continue", description: "Future reminders are scheduled only when they remain relevant." },
    ],
    integrationNote: "Messaging and CRM behavior depends on customer consent, provider rules, account access, and supported integrations.",
  },
  {
    slug: "ai-website-assistant",
    eyebrow: "Website assistance",
    title: "AI Website Assistant",
    headline: "Help visitors find the right next step—without faking a human.",
    summary: "Add a clearly identified AI-assisted experience that answers approved questions, gathers useful context, and routes visitors to the right person or action.",
    problem: "Website visitors often leave when they cannot quickly find an answer, understand the service, or know what information to provide.",
    solution: "A custom website assistant can work from approved business information, guide common questions, collect inquiry details, and hand conversations to a human when needed.",
    audience: ["Service businesses with recurring pre-sale questions", "Teams that need better website inquiry intake", "Businesses with detailed services or qualification steps"],
    benefits: ["Quicker answers from approved information", "Better-qualified inquiries", "Less repetitive question handling", "Clear disclosure and human escalation"],
    included: ["Approved knowledge and question mapping", "Conversation and fallback design", "Lead-intake or contact handoff", "Clear AI disclosure and limitations", "Testing for unsupported questions and failure states"],
    workflow: [
      { title: "Ask", description: "A visitor opens the assistant and asks about the business or service." },
      { title: "Ground", description: "The assistant uses only the approved information configured for it." },
      { title: "Guide", description: "It answers, asks a useful follow-up, or points to the correct page." },
      { title: "Capture", description: "With permission, it gathers the details needed for an inquiry." },
      { title: "Escalate", description: "Uncertain, sensitive, or high-value questions go to a person." },
    ],
    integrationNote: "An AI model, knowledge source, and contact handoff must be selected and configured; this service does not imply an always-correct autonomous agent.",
  },
  {
    slug: "content-commercials",
    eyebrow: "Content operations",
    title: "Content & Commercial Automation",
    headline: "Turn a repeatable brief into a repeatable production flow.",
    summary: "Build an organized system for moving from ideas and source material to drafts, assets, reviews, and ready-to-publish content.",
    problem: "Content production stalls when briefs, assets, revisions, and approvals live in different places or depend on one person remembering every step.",
    solution: "A tailored workflow can structure inputs, assist with drafts or media generation, enforce review gates, and package approved output for the chosen publishing process.",
    audience: ["Businesses producing recurring social or promotional content", "Teams building short-form commercials or campaign assets", "Creators managing repeatable multi-step production"],
    benefits: ["More consistent briefs and outputs", "Less repetitive production setup", "Clear review and approval stages", "Reusable workflows across content types"],
    included: ["Brief and source-material structure", "AI-assisted draft or asset workflow", "Brand and human review checkpoints", "Version and approval flow", "Export or publishing handoff when supported"],
    workflow: [
      { title: "Brief", description: "The business provides the objective, offer, audience, and approved source material." },
      { title: "Generate", description: "Configured tools assist with scripts, copy, visuals, audio, or assembly." },
      { title: "Review", description: "A human checks accuracy, brand fit, rights, and quality." },
      { title: "Refine", description: "Feedback is captured and applied through a clear revision stage." },
      { title: "Deliver", description: "Approved assets are packaged for the real publishing destination." },
    ],
    integrationNote: "Generation providers, usage rights, publishing accounts, and automated distribution are configured separately and require real account access.",
  },
  {
    slug: "listing-inventory",
    eyebrow: "Inventory operations",
    title: "Listing & Inventory Automation",
    headline: "Keep product information organized from intake to listing.",
    summary: "Reduce repetitive inventory work with a workflow for product intake, identifiers, pricing inputs, listing preparation, status, and marketplace handoff.",
    problem: "Product details get copied between spreadsheets, photos, marketplaces, and internal notes. That creates missing information, duplicate work, and unclear inventory status.",
    solution: "A custom inventory workflow can create one dependable record, guide listing preparation, separate marketplace-linked and independent stock, and surface the next action.",
    audience: ["Resellers and product-based small businesses", "Teams managing listings across more than one channel", "Owners who need clearer internal inventory status"],
    benefits: ["Less repeated data entry", "Cleaner product records", "Clear listing and stock status", "A safer foundation for future marketplace connections"],
    included: ["Inventory field and status design", "Product intake and image workflow", "Listing preparation and review stages", "Channel and marketplace separation", "Supported marketplace integration only after account authorization"],
    workflow: [
      { title: "Intake", description: "Create a product record with identifiers, quantity, photos, and known details." },
      { title: "Prepare", description: "Complete the title, pricing inputs, category, condition, and description." },
      { title: "Review", description: "A person confirms accuracy and chooses the intended channel." },
      { title: "List", description: "The record is handed to a supported marketplace process or kept independent." },
      { title: "Track", description: "Status and quantity are updated from the actual operating workflow." },
    ],
    integrationNote: "Marketplace APIs—including eBay—require real developer credentials and account authorization. No connection is claimed before that setup exists.",
  },
  {
    slug: "custom-ai-agents",
    eyebrow: "Custom AI-assisted workflows",
    title: "Custom AI Agents",
    headline: "Give a defined business job the right AI-assisted workflow.",
    summary: "Design a focused agent around a real task, approved information, clear tools, and boundaries—rather than dropping a generic chatbot into the business.",
    problem: "Generic AI tools lack business context, repeat the same setup every time, and can create risk when they act without clear limits or review.",
    solution: "A custom agent system can combine instructions, approved knowledge, tools, checkpoints, and human approval around one well-defined responsibility.",
    audience: ["Teams repeating research, drafting, or coordination tasks", "Businesses that need AI inside an existing workflow", "Owners exploring a controlled AI-assisted internal tool"],
    benefits: ["Less repetitive setup", "More consistent task execution", "Clear boundaries and approval points", "A system designed around the actual job"],
    included: ["Use-case and risk definition", "Agent instructions and approved knowledge", "Tool and integration design", "Human approval and fallback behavior", "Evaluation, testing, and operating documentation"],
    workflow: [
      { title: "Request", description: "A user gives the agent a defined task and the information it needs." },
      { title: "Plan", description: "The agent follows the configured steps, limits, and available tools." },
      { title: "Work", description: "It researches, drafts, organizes, or coordinates within the agreed scope." },
      { title: "Review", description: "Important output or actions stop for human confirmation." },
      { title: "Record", description: "The result and relevant context return to the business workflow." },
    ],
    integrationNote: "Model providers, tools, permissions, data access, and autonomous actions are scoped and configured per project; none are assumed by default.",
  },
];

export function getAutomationService(slug: string) {
  return automationServices.find((service) => service.slug === slug);
}
