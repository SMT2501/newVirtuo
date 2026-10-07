export type CheckupQuestionId = 'organisation' | 'goal' | 'website' | 'workflow' | 'followup' | 'priority' | 'timing';
export type CheckupAnswers = Partial<Record<CheckupQuestionId, string>>;
export interface CheckupOption { value: string; label: string }
export interface CheckupQuestion { id: CheckupQuestionId; title: string; hint: string; options: CheckupOption[] }
const unsure = { value: 'unsure', label: 'Not sure yet' };

export function checkupQuestions(answers: CheckupAnswers): CheckupQuestion[] {
  const applications = answers.goal === 'applications';
  const selling = answers.goal === 'selling';
  return [
    { id: 'organisation', title: 'What kind of organisation is this for?', hint: 'An established institution, a growing business or an early idea - start where you are.', options: [
      { value: 'business', label: 'Business' }, { value: 'school', label: 'School' }, { value: 'university', label: 'University or research institution' }, { value: 'association', label: 'Association or NGO' }, { value: 'professional', label: 'Professional practice' }, { value: 'idea', label: 'New venture or digital product' }, unsure ] },
    { id: 'goal', title: 'What would you most like to improve?', hint: 'Choose the main challenge. We will work out the supporting pieces from there.', options: [
      { value: 'presence', label: 'Build or improve our online presence' }, { value: 'enquiries', label: 'Attract and manage enquiries' }, { value: 'applications', label: 'Manage applications or registrations online' }, { value: 'selling', label: 'Sell products or services online' }, { value: 'automation', label: 'Reduce manual work' }, { value: 'product', label: 'Build a digital platform or product' }, unsure ] },
    { id: 'website', title: 'What is your current website situation?', hint: 'This is based on your experience; we are not scanning or auditing your website.', options: [
      { value: 'current', label: 'We have a website that is up to date' }, { value: 'outdated', label: 'We have one, but it needs work' }, { value: 'none', label: 'We do not have a website' }, unsure ] },
    { id: 'workflow', title: applications ? 'How do you currently receive applications or registrations?' : selling ? 'How do customers currently place orders?' : 'How do people currently reach you or start a request?', hint: 'Pick the main route, even if you use more than one.', options: [
      { value: 'online', label: applications ? 'An online application system' : selling ? 'An online store or ordering system' : 'Website forms or a booking system' },
      { value: 'whatsapp', label: 'WhatsApp messages' }, { value: 'email', label: 'Email or phone' }, { value: 'paper', label: 'In person or paper forms' }, { value: 'mixed', label: 'Several channels with no single place to track them' }, unsure ] },
    { id: 'followup', title: 'What happens after a request arrives?', hint: 'Think about tracking progress, replies and handing it to the right person.', options: [
      { value: 'structured', label: 'We have a clear, tracked process' }, { value: 'manual', label: 'We handle and track it manually' }, { value: 'missed', label: 'Some requests are difficult to keep track of' }, { value: 'new', label: 'We are setting this up for the first time' }, unsure ] },
    { id: 'priority', title: 'What matters most in the solution?', hint: 'A focused website and a connected organisational system require different scopes.', options: [
      { value: 'clear', label: 'A clear, professional presence' }, { value: 'conversion', label: 'An easier journey from interest to enquiry' }, { value: 'efficiency', label: 'Less administration and manual work' }, { value: 'systems', label: 'Connected systems, different users and approval workflows' }, unsure ] },
    { id: 'timing', title: 'Where are you in the decision process?', hint: 'No commitment here. It helps us tailor the next conversation.', options: [
      { value: 'ready', label: 'Ready to discuss scope and a proposal' }, { value: 'planning', label: 'Planning for the next few months' }, { value: 'approval', label: 'Building a case for internal approval' }, { value: 'exploring', label: 'Exploring the possibilities' }, unsure ] },
  ];
}

export interface CheckupRecommendation { title: string; reason: string; scope: string; strengths: string[]; opportunities: string[]; clarify: string[]; institutional: boolean }
export function recommendCheckup(answers: CheckupAnswers): CheckupRecommendation {
  const institutional = ['school', 'university', 'association'].includes(answers.organisation ?? '');
  const custom = institutional || answers.priority === 'systems' || ['applications', 'selling', 'automation', 'product'].includes(answers.goal ?? '');
  const recipes: Record<string, { title: string; reason: string }> = {
    presence: { title: institutional ? 'An institutional website and content journey' : 'A website built around your audience', reason: 'You want a stronger online presence. Start with the content, structure and actions your audience needs.' },
    enquiries: { title: 'A website and enquiry journey', reason: 'You want to attract and manage enquiries. Connect the first point of interest with a clear route to request help and track the next step.' },
    applications: { title: 'An application or registration portal', reason: 'You want applications or registrations online. Scope the applicant experience, review process and information handling together.' },
    selling: { title: 'An online sales and order journey', reason: 'You want to sell online. Scope the catalogue, ordering experience and how your team fulfils each order.' },
    automation: { title: 'Workflow discovery and targeted automation', reason: 'You want less manual work. Map a specific repetitive process first, then identify what can be connected or automated.' },
    product: { title: 'Digital product discovery and a scoped first release', reason: 'You want a digital product. Define its users, core problem and essential features before committing to a build.' },
  };
  const primary = recipes[answers.goal ?? ''] ?? { title: 'A digital discovery session', reason: 'You are still finding the right direction. Start by identifying the most useful outcome and the constraints around it.' };
  const strengths: string[] = [];
  if (answers.website === 'current') strengths.push('You report that your website is up to date.');
  if (answers.workflow === 'online') strengths.push('You already have an online route for requests.');
  if (answers.followup === 'structured') strengths.push('You already have a clear, tracked follow-up process.');
  const opportunities: string[] = [];
  if (answers.website === 'none' && ['presence', 'enquiries', 'selling'].includes(answers.goal ?? '')) opportunities.push('Create a clear online destination for your audience.');
  if (answers.website === 'outdated') opportunities.push('Review the existing website before deciding what to keep or improve.');
  if (answers.workflow === 'mixed') opportunities.push('Bring requests from different channels into a shared tracking process.');
  if (answers.workflow === 'whatsapp') opportunities.push('Make the WhatsApp enquiry route clearer and agree how requests will be tracked.');
  if (answers.workflow === 'paper') opportunities.push('Explore a digital intake process that suits the people using it.');
  if (answers.followup === 'manual' || answers.followup === 'missed') opportunities.push('Consider lead or request management and appropriate follow-up automation.');
  if (answers.priority === 'systems') opportunities.push('Map existing integrations, access roles and approval workflows before implementation.');
  const clarify = checkupQuestions(answers).filter(q => !answers[q.id] || answers[q.id] === 'unsure').map(q => q.title);
  return { ...primary, institutional, strengths, opportunities, clarify, scope: custom ? 'Custom scope and proposal. We will confirm users, integrations, data requirements and stakeholder approvals before pricing.' : 'Scope and proposal first. We will confirm the content, features and delivery requirements before recommending a package and price.' };
}

export function checkupBrief(answers: CheckupAnswers): string {
  const result = recommendCheckup(answers);
  const lines = checkupQuestions(answers).map(q => `${q.title} ${q.options.find(o => o.value === answers[q.id])?.label ?? 'Not sure yet'}`);
  return ['Hi Virtuo Designs, I completed the digital checkup and would like to discuss a scoped proposal.', ...lines, `Recommended starting point: ${result.title}`, `Why: ${result.reason}`, ...result.opportunities.map(item => `Opportunity to explore: ${item}`), result.scope].join('\n');
}
