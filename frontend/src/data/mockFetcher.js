// In-Memory Zero-API Mock Engine for CRM
// Eliminates all network calls, providing instant 0ms responses with full demo data.

export const mockUsers = [
  {
    name: 'Administrator',
    email: 'admin@crm.local',
    full_name: 'CRM Admin',
    role: 'System Manager',
    user_image: null,
  },
  {
    name: 'sarah.connor@crm.local',
    email: 'sarah.connor@crm.local',
    full_name: 'Sarah Connor',
    role: 'Sales Manager',
    user_image: null,
  },
  {
    name: 'alex.rivera@crm.local',
    email: 'alex.rivera@crm.local',
    full_name: 'Alex Rivera',
    role: 'Sales User',
    user_image: null,
  },
]

export const demoLeads = [
  {
    name: 'CRM-LEAD-2026-0001',
    lead_name: 'Sarah Jenkins',
    first_name: 'Sarah',
    last_name: 'Jenkins',
    organization: 'CloudScale Systems',
    status: 'Interested',
    email: 's.jenkins@cloudscale.io',
    mobile_no: '+1 (555) 234-5678',
    annual_revenue: 450000,
    lead_owner: 'Administrator',
    source: 'Website Demo',
    creation: '2026-11-15 10:30:00',
    modified: '2026-11-21 09:15:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-LEAD-2026-0002',
    lead_name: 'Marcus Vance',
    first_name: 'Marcus',
    last_name: 'Vance',
    organization: 'FinEdge Global',
    status: 'Qualified',
    email: 'm.vance@finedge.com',
    mobile_no: '+1 (555) 876-5432',
    annual_revenue: 780000,
    lead_owner: 'Sarah Connor',
    source: 'LinkedIn Inbound',
    creation: '2026-11-16 11:45:00',
    modified: '2026-11-21 14:20:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-LEAD-2026-0003',
    lead_name: 'Elena Rostova',
    first_name: 'Elena',
    last_name: 'Rostova',
    organization: 'Nexus Dynamics',
    status: 'Contacted',
    email: 'elena@nexusdynamics.eu',
    mobile_no: '+44 20 7946 0912',
    annual_revenue: 1200000,
    lead_owner: 'Alex Rivera',
    source: 'Partner Referral',
    creation: '2026-11-17 14:10:00',
    modified: '2026-11-20 16:45:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-LEAD-2026-0004',
    lead_name: 'David Chen',
    first_name: 'David',
    last_name: 'Chen',
    organization: 'Hyperion Logistics',
    status: 'New',
    email: 'd.chen@hyperionlog.com',
    mobile_no: '+1 (555) 345-6789',
    annual_revenue: 320000,
    lead_owner: 'Administrator',
    source: 'Google Organic',
    creation: '2026-11-18 09:00:00',
    modified: '2026-11-21 11:30:00',
    _liked_by: '',
    _seen: false,
  },
  {
    name: 'CRM-LEAD-2026-0005',
    lead_name: 'Aisha Patel',
    first_name: 'Aisha',
    last_name: 'Patel',
    organization: 'Vertex Retail',
    status: 'Quoted',
    email: 'aisha@vertexretail.in',
    mobile_no: '+91 98200 12345',
    annual_revenue: 650000,
    lead_owner: 'Sarah Connor',
    source: 'Trade Show',
    creation: '2026-11-19 13:25:00',
    modified: '2026-11-21 15:40:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-LEAD-2026-0006',
    lead_name: 'Jonathan Reynolds',
    first_name: 'Jonathan',
    last_name: 'Reynolds',
    organization: 'AeroTech Systems',
    status: 'Qualified',
    email: 'j.reynolds@aerotech.com',
    mobile_no: '+1 (555) 456-7890',
    annual_revenue: 950000,
    lead_owner: 'Alex Rivera',
    source: 'Website Demo',
    creation: '2026-11-20 15:00:00',
    modified: '2026-11-21 17:10:00',
    _liked_by: '',
    _seen: true,
  },
]

export const demoDeals = [
  {
    name: 'CRM-DEAL-2026-0001',
    deal_name: 'CloudScale 500-Seat Enterprise Rollout',
    organization: 'CloudScale Systems',
    status: 'Negotiation',
    deal_value: 240000,
    annual_revenue: 240000,
    probability: 85,
    expected_closing: '2026-12-15',
    deal_owner: 'Administrator',
    contact: 'Sarah Jenkins',
    creation: '2026-11-10 10:00:00',
    modified: '2026-11-21 16:30:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-DEAL-2026-0002',
    deal_name: 'FinEdge Multi-Region Sales Platform',
    organization: 'FinEdge Global',
    status: 'Proposal Sent',
    deal_value: 580000,
    annual_revenue: 580000,
    probability: 70,
    expected_closing: '2026-12-30',
    deal_owner: 'Sarah Connor',
    contact: 'Marcus Vance',
    creation: '2026-11-12 11:30:00',
    modified: '2026-11-21 14:15:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-DEAL-2026-0003',
    deal_name: 'Nexus Dynamics Global Security Suite',
    organization: 'Nexus Dynamics',
    status: 'Needs Analysis',
    deal_value: 420000,
    annual_revenue: 420000,
    probability: 50,
    expected_closing: '2027-01-20',
    deal_owner: 'Alex Rivera',
    contact: 'Elena Rostova',
    creation: '2026-11-14 14:00:00',
    modified: '2026-11-20 18:00:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-DEAL-2026-0004',
    deal_name: 'Hyperion Logistics Warehouse Automation CRM',
    organization: 'Hyperion Logistics',
    status: 'Qualification',
    deal_value: 190000,
    annual_revenue: 190000,
    probability: 30,
    expected_closing: '2027-02-10',
    deal_owner: 'Administrator',
    contact: 'David Chen',
    creation: '2026-11-18 09:30:00',
    modified: '2026-11-21 12:00:00',
    _liked_by: '',
    _seen: false,
  },
  {
    name: 'CRM-DEAL-2026-0005',
    deal_name: 'Vertex Retail Omni-Channel Sales Hub',
    organization: 'Vertex Retail',
    status: 'Closed Won',
    deal_value: 310000,
    annual_revenue: 310000,
    probability: 100,
    expected_closing: '2026-11-18',
    deal_owner: 'Sarah Connor',
    contact: 'Aisha Patel',
    creation: '2026-10-25 15:00:00',
    modified: '2026-11-18 16:45:00',
    _liked_by: '',
    _seen: true,
  },
  {
    name: 'CRM-DEAL-2026-0006',
    deal_name: 'AeroTech Commercial Fleet Analytics Hub',
    organization: 'AeroTech Systems',
    status: 'Proposal Sent',
    deal_value: 360000,
    annual_revenue: 360000,
    probability: 65,
    expected_closing: '2027-01-15',
    deal_owner: 'Alex Rivera',
    contact: 'Jonathan Reynolds',
    creation: '2026-11-19 16:00:00',
    modified: '2026-11-21 18:20:00',
    _liked_by: '',
    _seen: true,
  },
]

export const demoContacts = [
  {
    name: 'CRM-CNT-2026-0001',
    full_name: 'Sarah Jenkins',
    first_name: 'Sarah',
    last_name: 'Jenkins',
    organization: 'CloudScale Systems',
    designation: 'VP of Engineering',
    email_id: 's.jenkins@cloudscale.io',
    phone: '+1 (555) 234-5678',
    status: 'Active',
    owner: 'Administrator',
    creation: '2026-11-15 10:00:00',
    modified: '2026-11-21 09:15:00',
  },
  {
    name: 'CRM-CNT-2026-0002',
    full_name: 'Marcus Vance',
    first_name: 'Marcus',
    last_name: 'Vance',
    organization: 'FinEdge Global',
    designation: 'Head of Growth',
    email_id: 'm.vance@finedge.com',
    phone: '+1 (555) 876-5432',
    status: 'Active',
    owner: 'Sarah Connor',
    creation: '2026-11-16 11:00:00',
    modified: '2026-11-21 14:20:00',
  },
  {
    name: 'CRM-CNT-2026-0003',
    full_name: 'Elena Rostova',
    first_name: 'Elena',
    last_name: 'Rostova',
    organization: 'Nexus Dynamics',
    designation: 'Procurement Director',
    email_id: 'elena@nexusdynamics.eu',
    phone: '+44 20 7946 0912',
    status: 'Active',
    owner: 'Alex Rivera',
    creation: '2026-11-17 13:00:00',
    modified: '2026-11-20 16:45:00',
  },
  {
    name: 'CRM-CNT-2026-0004',
    full_name: 'David Chen',
    first_name: 'David',
    last_name: 'Chen',
    organization: 'Hyperion Logistics',
    designation: 'CTO',
    email_id: 'd.chen@hyperionlog.com',
    phone: '+1 (555) 345-6789',
    status: 'Active',
    owner: 'Administrator',
    creation: '2026-11-18 09:00:00',
    modified: '2026-11-21 11:30:00',
  },
  {
    name: 'CRM-CNT-2026-0005',
    full_name: 'Aisha Patel',
    first_name: 'Aisha',
    last_name: 'Patel',
    organization: 'Vertex Retail',
    designation: 'VP Operations',
    email_id: 'aisha@vertexretail.in',
    phone: '+91 98200 12345',
    status: 'Active',
    owner: 'Sarah Connor',
    creation: '2026-11-19 12:00:00',
    modified: '2026-11-21 15:40:00',
  },
]

export const demoOrganizations = [
  {
    name: 'CloudScale Systems',
    organization_name: 'CloudScale Systems',
    industry: 'Enterprise Cloud & SaaS',
    annual_revenue: 45000000,
    website: 'https://cloudscale.io',
    territory: 'United States',
    owner: 'Administrator',
    creation: '2026-11-15 10:00:00',
    modified: '2026-11-21 09:15:00',
  },
  {
    name: 'FinEdge Global',
    organization_name: 'FinEdge Global',
    industry: 'Fintech & Banking Technology',
    annual_revenue: 28000000,
    website: 'https://finedge.com',
    territory: 'United States',
    owner: 'Sarah Connor',
    creation: '2026-11-16 11:00:00',
    modified: '2026-11-21 14:20:00',
  },
  {
    name: 'Nexus Dynamics',
    organization_name: 'Nexus Dynamics',
    industry: 'Industrial Automation & AI',
    annual_revenue: 62000000,
    website: 'https://nexusdynamics.eu',
    territory: 'United Kingdom',
    owner: 'Alex Rivera',
    creation: '2026-11-17 13:00:00',
    modified: '2026-11-20 16:45:00',
  },
  {
    name: 'Hyperion Logistics',
    organization_name: 'Hyperion Logistics',
    industry: 'Supply Chain & Freight Tech',
    annual_revenue: 19000000,
    website: 'https://hyperionlog.com',
    territory: 'United States',
    owner: 'Administrator',
    creation: '2026-11-18 09:00:00',
    modified: '2026-11-21 11:30:00',
  },
  {
    name: 'Vertex Retail',
    organization_name: 'Vertex Retail',
    industry: 'Consumer Retail & E-Commerce',
    annual_revenue: 85000000,
    website: 'https://vertexretail.in',
    territory: 'India',
    owner: 'Sarah Connor',
    creation: '2026-11-19 12:00:00',
    modified: '2026-11-21 15:40:00',
  },
]

export const demoTasks = [
  {
    name: 'CRM-TSK-2026-0001',
    title: 'Executive review meeting for CloudScale contract terms',
    status: 'Open',
    priority: 'High',
    due_date: '2026-11-21',
    assigned_to: 'Administrator',
    reference_doctype: 'CRM Deal',
    reference_docname: 'CRM-DEAL-2026-0001',
    creation: '2026-11-20 09:00:00',
    modified: '2026-11-21 10:00:00',
  },
  {
    name: 'CRM-TSK-2026-0002',
    title: 'Send SOC2 compliance packet to FinEdge legal team',
    status: 'Open',
    priority: 'High',
    due_date: '2026-11-21',
    assigned_to: 'Administrator',
    reference_doctype: 'CRM Deal',
    reference_docname: 'CRM-DEAL-2026-0002',
    creation: '2026-11-20 10:00:00',
    modified: '2026-11-21 11:30:00',
  },
  {
    name: 'CRM-TSK-2026-0003',
    title: 'Technical architecture sync with David Chen on API limits',
    status: 'Open',
    priority: 'Medium',
    due_date: '2026-11-22',
    assigned_to: 'Alex Rivera',
    reference_doctype: 'CRM Lead',
    reference_docname: 'CRM-LEAD-2026-0004',
    creation: '2026-11-20 11:00:00',
    modified: '2026-11-21 14:00:00',
  },
  {
    name: 'CRM-TSK-2026-0004',
    title: 'Prepare Q1 sales expansion forecasting report for leadership',
    status: 'Open',
    priority: 'Low',
    due_date: '2026-11-24',
    assigned_to: 'Sarah Connor',
    reference_doctype: null,
    reference_docname: null,
    creation: '2026-11-20 14:00:00',
    modified: '2026-11-21 15:00:00',
  },
]

export const demoNotes = [
  {
    name: 'CRM-NOTE-2026-0001',
    title: 'Q4 Enterprise Deal Structuring & Multi-Year Discount Model',
    content: 'Review standard contract clauses: 3-year commitments receive 18% tier discount. CloudScale and FinEdge are prime candidates for this model.',
    owner: 'Administrator',
    pinned: 1,
    creation: '2026-11-18 10:00:00',
    modified: '2026-11-21 16:00:00',
  },
  {
    name: 'CRM-NOTE-2026-0002',
    title: 'CloudScale Systems: Key Stakeholder Alignment & Budget Timeline',
    content: 'CTO confirmed budget sign-off scheduled for Dec 10. Sarah Jenkins is championing our platform internally over HubSpot.',
    owner: 'Administrator',
    pinned: 1,
    creation: '2026-11-19 14:00:00',
    modified: '2026-11-21 12:45:00',
  },
  {
    name: 'CRM-NOTE-2026-0003',
    title: 'Competitive Differentiation: Modern CRM vs Legacy CRMs',
    content: 'Key winning factors in customer interviews: speed, Linear-style keyboard navigation, modern pipeline visibility, and transparent pricing.',
    owner: 'Sarah Connor',
    pinned: 0,
    creation: '2026-11-20 15:00:00',
    modified: '2026-11-20 18:30:00',
  },
]

export const doctypeFields = {
  'CRM Lead': [
    { fieldname: 'name', label: 'ID', fieldtype: 'Data' },
    { fieldname: 'lead_name', label: 'Lead Name', fieldtype: 'Data' },
    { fieldname: 'organization', label: 'Organization', fieldtype: 'Link', options: 'CRM Organization' },
    { fieldname: 'status', label: 'Status', fieldtype: 'Select', options: 'New\nContacted\nInterested\nQualified\nQuoted\nLost' },
    { fieldname: 'email', label: 'Email', fieldtype: 'Data' },
    { fieldname: 'mobile_no', label: 'Mobile No', fieldtype: 'Data' },
    { fieldname: 'annual_revenue', label: 'Annual Revenue', fieldtype: 'Currency' },
    { fieldname: 'lead_owner', label: 'Lead Owner', fieldtype: 'Link', options: 'User' },
    { fieldname: 'source', label: 'Source', fieldtype: 'Link', options: 'CRM Lead Source' },
    { fieldname: 'creation', label: 'Created On', fieldtype: 'Datetime' },
    { fieldname: 'modified', label: 'Last Modified', fieldtype: 'Datetime' },
  ],
  'CRM Deal': [
    { fieldname: 'name', label: 'ID', fieldtype: 'Data' },
    { fieldname: 'deal_name', label: 'Deal Name', fieldtype: 'Data' },
    { fieldname: 'organization', label: 'Organization', fieldtype: 'Link', options: 'CRM Organization' },
    { fieldname: 'status', label: 'Stage', fieldtype: 'Select', options: 'Qualification\nNeeds Analysis\nProposal Sent\nNegotiation\nClosed Won\nClosed Lost' },
    { fieldname: 'deal_value', label: 'Deal Value', fieldtype: 'Currency' },
    { fieldname: 'annual_revenue', label: 'Annual Revenue', fieldtype: 'Currency' },
    { fieldname: 'probability', label: 'Probability', fieldtype: 'Percent' },
    { fieldname: 'expected_closing', label: 'Expected Close', fieldtype: 'Date' },
    { fieldname: 'deal_owner', label: 'Deal Owner', fieldtype: 'Link', options: 'User' },
    { fieldname: 'contact', label: 'Contact', fieldtype: 'Link', options: 'Contact' },
    { fieldname: 'creation', label: 'Created On', fieldtype: 'Datetime' },
    { fieldname: 'modified', label: 'Last Modified', fieldtype: 'Datetime' },
  ],
  'Contact': [
    { fieldname: 'name', label: 'ID', fieldtype: 'Data' },
    { fieldname: 'full_name', label: 'Full Name', fieldtype: 'Data' },
    { fieldname: 'organization', label: 'Organization', fieldtype: 'Link', options: 'CRM Organization' },
    { fieldname: 'designation', label: 'Designation', fieldtype: 'Data' },
    { fieldname: 'email_id', label: 'Email', fieldtype: 'Data' },
    { fieldname: 'phone', label: 'Phone', fieldtype: 'Data' },
    { fieldname: 'status', label: 'Status', fieldtype: 'Select', options: 'Active\nPassive\nInactive' },
    { fieldname: 'owner', label: 'Owner', fieldtype: 'Link', options: 'User' },
    { fieldname: 'creation', label: 'Created On', fieldtype: 'Datetime' },
    { fieldname: 'modified', label: 'Last Modified', fieldtype: 'Datetime' },
  ],
  'CRM Organization': [
    { fieldname: 'name', label: 'ID', fieldtype: 'Data' },
    { fieldname: 'organization_name', label: 'Organization Name', fieldtype: 'Data' },
    { fieldname: 'industry', label: 'Industry', fieldtype: 'Data' },
    { fieldname: 'annual_revenue', label: 'Annual Revenue', fieldtype: 'Currency' },
    { fieldname: 'website', label: 'Website', fieldtype: 'Data' },
    { fieldname: 'territory', label: 'Territory', fieldtype: 'Link', options: 'Territory' },
    { fieldname: 'owner', label: 'Owner', fieldtype: 'Link', options: 'User' },
    { fieldname: 'creation', label: 'Created On', fieldtype: 'Datetime' },
    { fieldname: 'modified', label: 'Last Modified', fieldtype: 'Datetime' },
  ],
  'CRM Task': [
    { fieldname: 'name', label: 'ID', fieldtype: 'Data' },
    { fieldname: 'title', label: 'Title', fieldtype: 'Data' },
    { fieldname: 'status', label: 'Status', fieldtype: 'Select', options: 'Open\nIn Progress\nCompleted\nCancelled' },
    { fieldname: 'priority', label: 'Priority', fieldtype: 'Select', options: 'Low\nMedium\nHigh\nUrgent' },
    { fieldname: 'due_date', label: 'Due Date', fieldtype: 'Date' },
    { fieldname: 'assigned_to', label: 'Assigned To', fieldtype: 'Link', options: 'User' },
    { fieldname: 'reference_doctype', label: 'Reference Type', fieldtype: 'Link' },
    { fieldname: 'reference_docname', label: 'Reference Name', fieldtype: 'Dynamic Link' },
    { fieldname: 'creation', label: 'Created On', fieldtype: 'Datetime' },
    { fieldname: 'modified', label: 'Last Modified', fieldtype: 'Datetime' },
  ],
  'FCRM Note': [
    { fieldname: 'name', label: 'ID', fieldtype: 'Data' },
    { fieldname: 'title', label: 'Title', fieldtype: 'Data' },
    { fieldname: 'content', label: 'Content', fieldtype: 'Text' },
    { fieldname: 'pinned', label: 'Pinned', fieldtype: 'Check' },
    { fieldname: 'owner', label: 'Owner', fieldtype: 'Link', options: 'User' },
    { fieldname: 'creation', label: 'Created On', fieldtype: 'Datetime' },
    { fieldname: 'modified', label: 'Last Modified', fieldtype: 'Datetime' },
  ],
}

export function getDoctypeData(doctype, viewType = 'list') {
  if (doctype === 'CRM Lead') {
    if (viewType === 'kanban') {
      const statuses = ['New', 'Contacted', 'Interested', 'Qualified', 'Quoted']
      const kanbanData = statuses.map((status) => {
        const items = demoLeads.filter((l) => l.status === status)
        return {
          column: {
            title: status,
            name: status,
            count: items.length,
            all_count: items.length,
            page_length: 20,
          },
          fields: ['lead_name', 'organization', 'annual_revenue', 'lead_owner'],
          data: items,
        }
      })
      return {
        data: kanbanData,
        view_type: 'kanban',
        column_field: 'status',
        title_field: 'lead_name',
        total_count: demoLeads.length,
        row_count: demoLeads.length,
        rows: ['name', 'lead_name', 'organization', 'status', 'annual_revenue', 'lead_owner', 'email', 'source'],
        fields: doctypeFields['CRM Lead'],
        is_default: true,
        views: standardViews.filter((v) => v.dt === 'CRM Lead'),
      }
    }
    return {
      data: demoLeads,
      view_type: 'list',
      columns: [
        { label: 'Lead Name', key: 'lead_name', width: '180px' },
        { label: 'Organization', key: 'organization', width: '160px' },
        { label: 'Status', key: 'status', width: '120px' },
        { label: 'Annual Revenue', key: 'annual_revenue', width: '140px' },
        { label: 'Lead Owner', key: 'lead_owner', width: '130px' },
        { label: 'Email', key: 'email', width: '180px' },
        { label: 'Source', key: 'source', width: '130px' },
      ],
      rows: ['name', 'lead_name', 'organization', 'status', 'annual_revenue', 'lead_owner', 'email', 'source'],
      fields: doctypeFields['CRM Lead'],
      total_count: demoLeads.length,
      row_count: demoLeads.length,
      column_field: 'status',
      title_field: 'lead_name',
      is_default: true,
      views: standardViews.filter((v) => v.dt === 'CRM Lead'),
    }
  }

  if (doctype === 'CRM Deal') {
    if (viewType === 'kanban') {
      const stages = ['Qualification', 'Needs Analysis', 'Proposal Sent', 'Negotiation', 'Closed Won']
      const kanbanData = stages.map((stage) => {
        const items = demoDeals.filter((d) => d.status === stage)
        return {
          column: {
            title: stage,
            name: stage,
            count: items.length,
            all_count: items.length,
            page_length: 20,
          },
          fields: ['deal_name', 'organization', 'deal_value', 'deal_owner', 'expected_closing'],
          data: items,
        }
      })
      return {
        data: kanbanData,
        view_type: 'kanban',
        column_field: 'status',
        title_field: 'deal_name',
        total_count: demoDeals.length,
        row_count: demoDeals.length,
        rows: ['name', 'deal_name', 'organization', 'status', 'deal_value', 'probability', 'expected_closing', 'deal_owner', '_email_count', '_note_count', '_task_count', '_comment_count'],
        fields: doctypeFields['CRM Deal'],
        is_default: true,
        views: standardViews.filter((v) => v.dt === 'CRM Deal'),
      }
    }
    return {
      data: demoDeals,
      view_type: 'list',
      columns: [
        { label: 'Deal Name', key: 'deal_name', width: '220px' },
        { label: 'Organization', key: 'organization', width: '160px' },
        { label: 'Stage', key: 'status', width: '130px' },
        { label: 'Deal Value', key: 'deal_value', width: '130px' },
        { label: 'Probability', key: 'probability', width: '100px' },
        { label: 'Expected Close', key: 'expected_closing', width: '120px' },
        { label: 'Deal Owner', key: 'deal_owner', width: '130px' },
      ],
      rows: ['name', 'deal_name', 'organization', 'status', 'deal_value', 'probability', 'expected_closing', 'deal_owner'],
      fields: doctypeFields['CRM Deal'],
      total_count: demoDeals.length,
      row_count: demoDeals.length,
      column_field: 'status',
      title_field: 'deal_name',
      is_default: true,
      views: standardViews.filter((v) => v.dt === 'CRM Deal'),
    }
  }

  if (doctype === 'Contact') {
    return {
      data: demoContacts,
      view_type: 'list',
      columns: [
        { label: 'Full Name', key: 'full_name', width: '180px' },
        { label: 'Organization', key: 'organization', width: '160px' },
        { label: 'Designation', key: 'designation', width: '160px' },
        { label: 'Email', key: 'email_id', width: '180px' },
        { label: 'Phone', key: 'phone', width: '140px' },
        { label: 'Status', key: 'status', width: '100px' },
      ],
      rows: ['name', 'full_name', 'organization', 'designation', 'email_id', 'phone', 'status'],
      fields: doctypeFields['Contact'],
      total_count: demoContacts.length,
      row_count: demoContacts.length,
      column_field: 'status',
      title_field: 'full_name',
      is_default: true,
      views: standardViews.filter((v) => v.dt === 'Contact'),
    }
  }

  if (doctype === 'CRM Organization') {
    return {
      data: demoOrganizations,
      view_type: 'list',
      columns: [
        { label: 'Organization Name', key: 'organization_name', width: '200px' },
        { label: 'Industry', key: 'industry', width: '180px' },
        { label: 'Annual Revenue', key: 'annual_revenue', width: '140px' },
        { label: 'Website', key: 'website', width: '160px' },
        { label: 'Territory', key: 'territory', width: '130px' },
      ],
      rows: ['name', 'organization_name', 'industry', 'annual_revenue', 'website', 'territory'],
      fields: doctypeFields['CRM Organization'],
      total_count: demoOrganizations.length,
      row_count: demoOrganizations.length,
      column_field: 'status',
      title_field: 'organization_name',
      is_default: true,
      views: standardViews.filter((v) => v.dt === 'CRM Organization'),
    }
  }

  if (doctype === 'CRM Task') {
    if (viewType === 'kanban') {
      const statuses = ['Pending', 'In Progress', 'Completed', 'Cancelled']
      const kanbanData = statuses.map((status) => {
        const items = demoTasks.filter((t) => t.status === status)
        return {
          column: {
            title: status,
            name: status,
            count: items.length,
            all_count: items.length,
            page_length: 20,
          },
          fields: ['title', 'priority', 'due_date', 'assigned_to'],
          data: items,
        }
      })
      return {
        data: kanbanData,
        view_type: 'kanban',
        column_field: 'status',
        title_field: 'title',
        total_count: demoTasks.length,
        row_count: demoTasks.length,
        rows: ['name', 'title', 'status', 'priority', 'due_date', 'assigned_to'],
        fields: doctypeFields['CRM Task'],
        is_default: true,
        views: standardViews.filter((v) => v.dt === 'CRM Task'),
      }
    }
    return {
      data: demoTasks,
      view_type: 'list',
      columns: [
        { label: 'Title', key: 'title', width: '260px' },
        { label: 'Status', key: 'status', width: '110px' },
        { label: 'Priority', key: 'priority', width: '100px' },
        { label: 'Due Date', key: 'due_date', width: '120px' },
        { label: 'Assigned To', key: 'assigned_to', width: '130px' },
      ],
      rows: ['name', 'title', 'status', 'priority', 'due_date', 'assigned_to'],
      fields: doctypeFields['CRM Task'],
      total_count: demoTasks.length,
      row_count: demoTasks.length,
      column_field: 'status',
      title_field: 'title',
      is_default: true,
      views: standardViews.filter((v) => v.dt === 'CRM Task'),
    }
  }

  if (doctype === 'FCRM Note') {
    return {
      data: demoNotes,
      view_type: 'list',
      columns: [
        { label: 'Title', key: 'title', width: '260px' },
        { label: 'Content', key: 'content', width: '300px' },
        { label: 'Owner', key: 'owner', width: '130px' },
        { label: 'Pinned', key: 'pinned', width: '80px' },
      ],
      rows: ['name', 'title', 'content', 'owner', 'pinned'],
      fields: doctypeFields['FCRM Note'],
      total_count: demoNotes.length,
      row_count: demoNotes.length,
      column_field: 'status',
      title_field: 'title',
      is_default: true,
      views: standardViews.filter((v) => v.dt === 'FCRM Note'),
    }
  }

  return {
    data: [],
    columns: [],
    rows: [],
    fields: [],
    total_count: 0,
    row_count: 0,
    is_default: true,
  }
}

export const standardViews = [
  {
    name: 'CRM Lead list',
    label: 'All Leads',
    type: 'list',
    dt: 'CRM Lead',
    route_name: 'Leads',
    is_standard: 1,
    is_default: 1,
    public: 1,
    pinned: 1,
  },
  {
    name: 'CRM Lead kanban',
    label: 'Lead Pipeline',
    type: 'kanban',
    dt: 'CRM Lead',
    route_name: 'Leads',
    is_standard: 1,
    is_default: 0,
    public: 1,
  },
  {
    name: 'CRM Deal kanban',
    label: 'Sales Pipeline',
    type: 'kanban',
    dt: 'CRM Deal',
    route_name: 'Deals',
    is_standard: 1,
    is_default: 1,
    public: 1,
    pinned: 1,
  },
  {
    name: 'CRM Deal list',
    label: 'Deals List',
    type: 'list',
    dt: 'CRM Deal',
    route_name: 'Deals',
    is_standard: 1,
    is_default: 0,
    public: 1,
  },
  {
    name: 'Contact list',
    label: 'All Contacts',
    type: 'list',
    dt: 'Contact',
    route_name: 'Contacts',
    is_standard: 1,
    is_default: 1,
    public: 1,
    pinned: 1,
  },
  {
    name: 'CRM Organization list',
    label: 'All Organizations',
    type: 'list',
    dt: 'CRM Organization',
    route_name: 'Organizations',
    is_standard: 1,
    is_default: 1,
    public: 1,
    pinned: 1,
  },
  {
    name: 'FCRM Note list',
    label: 'All Notes',
    type: 'list',
    dt: 'FCRM Note',
    route_name: 'Notes',
    is_standard: 1,
    is_default: 1,
    public: 1,
    pinned: 1,
  },
  {
    name: 'CRM Task list',
    label: 'All Tasks',
    type: 'list',
    dt: 'CRM Task',
    route_name: 'Tasks',
    is_standard: 1,
    is_default: 1,
    public: 1,
    pinned: 1,
  },
]

export const defaultDevBoot = {
  frappe_version: '16.0.0',
  default_route: '/crm',
  site_name: 'CRM',
  socketio_port: 9000,
  read_only_mode: false,
  csrf_token: 'crm-token',
  setup_complete: 1,
  sysdefaults: {
    currency: 'USD',
    currency_precision: 2,
    date_format: 'yyyy-mm-dd',
    time_format: 'HH:mm:ss',
    number_format: '#,###.##',
    float_precision: 2,
    hide_empty_read_only_fields: 1,
  },
  is_demo_site: false,
  demo_data_created: true,
  is_fc_site: false,
  needs_password_setup: false,
  crm_setup_pending: false,
  cloud_settings: { enabled: false },
  translated_doctypes: [],
  translated_messages: {},
  timezone: { system: 'UTC', user: 'UTC' },
  state_options: {},
  is_insights_installed: false,
}

// In-Memory Helper Functions for Document Operations

export function getDoc(doctype, name) {
  if (doctype === 'FCRM Settings') {
    return {
      name: 'FCRM Settings',
      doctype: 'FCRM Settings',
      brand_name: 'CRM',
      brand_logo: '/assets/crm/images/logo.svg',
      favicon: '/assets/crm/images/logo.svg',
    }
  }

  let list = []
  if (doctype === 'CRM Lead') list = demoLeads
  else if (doctype === 'CRM Deal') list = demoDeals
  else if (doctype === 'Contact') list = demoContacts
  else if (doctype === 'CRM Organization') list = demoOrganizations
  else if (doctype === 'CRM Task') list = demoTasks
  else if (doctype === 'FCRM Note') list = demoNotes

  const found = list.find((item) => item.name === name)
  if (found) {
    return { ...found, doctype }
  }
  return { name: name || 'DOC-001', doctype }
}

export function setValue(doctype, name, fieldname, value) {
  let list = []
  if (doctype === 'CRM Lead') list = demoLeads
  else if (doctype === 'CRM Deal') list = demoDeals
  else if (doctype === 'Contact') list = demoContacts
  else if (doctype === 'CRM Organization') list = demoOrganizations
  else if (doctype === 'CRM Task') list = demoTasks
  else if (doctype === 'FCRM Note') list = demoNotes

  const item = list.find((d) => d.name === name)
  if (item) {
    if (typeof fieldname === 'object' && fieldname !== null) {
      Object.assign(item, fieldname)
    } else {
      item[fieldname] = value
    }
    item.modified = new Date().toISOString().replace('T', ' ').substring(0, 19)
    return item
  }
  return { name, [fieldname]: value }
}

export function insertDoc(doc) {
  const dt = doc?.doctype || 'CRM Lead'
  const newName = `${dt.replace(/\s+/g, '-').toUpperCase()}-${Date.now().toString().slice(-4)}`
  const newDoc = {
    ...doc,
    name: doc?.name || newName,
    creation: new Date().toISOString().replace('T', ' ').substring(0, 19),
    modified: new Date().toISOString().replace('T', ' ').substring(0, 19),
  }
  if (dt === 'CRM Lead') demoLeads.unshift(newDoc)
  else if (dt === 'CRM Deal') demoDeals.unshift(newDoc)
  else if (dt === 'Contact') demoContacts.unshift(newDoc)
  else if (dt === 'CRM Organization') demoOrganizations.unshift(newDoc)
  else if (dt === 'CRM Task') demoTasks.unshift(newDoc)
  else if (dt === 'FCRM Note') demoNotes.unshift(newDoc)
  return newDoc
}

export function deleteDoc(doctype, name) {
  let list = []
  if (doctype === 'CRM Lead') list = demoLeads
  else if (doctype === 'CRM Deal') list = demoDeals
  else if (doctype === 'Contact') list = demoContacts
  else if (doctype === 'CRM Organization') list = demoOrganizations
  else if (doctype === 'CRM Task') list = demoTasks
  else if (doctype === 'FCRM Note') list = demoNotes

  const idx = list.findIndex((d) => d.name === name)
  if (idx !== -1) {
    list.splice(idx, 1)
  }
  return { message: 'ok' }
}

export function getList(doctype, filters = {}) {
  if (doctype === 'CRM Availability Status') {
    return [
      { name: 'Active', category: 'Active', color: 'green', enabled: 1, position: 1 },
      { name: 'Away', category: 'Away', color: 'yellow', enabled: 1, position: 2 },
      { name: 'Offline', category: 'Unavailable', color: 'gray', enabled: 1, position: 3 },
    ]
  }
  if (doctype === 'CRM Form Script') return []
  if (doctype === 'CRM Quick Filter') return []
  if (doctype === 'User') return mockUsers
  if (doctype === 'CRM Lead') return demoLeads
  if (doctype === 'CRM Deal') return demoDeals
  if (doctype === 'Contact') return demoContacts
  if (doctype === 'CRM Organization') return demoOrganizations
  if (doctype === 'CRM Task') return demoTasks
  if (doctype === 'FCRM Note') return demoNotes
  if (doctype === 'CRM Lead Status' || doctype === 'CRM Deal Status') {
    return [
      { name: 'New', color: 'blue' },
      { name: 'Contacted', color: 'yellow' },
      { name: 'Interested', color: 'purple' },
      { name: 'Qualified', color: 'green' },
      { name: 'Quoted', color: 'orange' },
      { name: 'Qualification', color: 'blue' },
      { name: 'Needs Analysis', color: 'yellow' },
      { name: 'Proposal Sent', color: 'purple' },
      { name: 'Negotiation', color: 'orange' },
      { name: 'Closed Won', color: 'green' },
    ]
  }
  return []
}

export function getSidepanelSections(doctype) {
  const fields = doctypeFields[doctype] || []
  return [
    {
      name: 'Details',
      label: 'Details',
      columns: [
        {
          fields: fields.map((f) => ({
            fieldname: f.fieldname,
            label: f.label,
            fieldtype: f.fieldtype,
            options: f.options,
          })),
        },
      ],
    },
  ]
}

export function getActivities(name) {
  return {
    versions: [
      {
        name: 'ver-1',
        activity_type: 'comment',
        creation: '2026-11-21 15:30:00',
        owner: 'Administrator',
        content: 'Completed executive architecture presentation. Security team approved SOC2 audit results.',
        data: { comment: 'Completed executive architecture presentation. Security team approved SOC2 audit results.' },
      },
      {
        name: 'ver-2',
        activity_type: 'communication',
        creation: '2026-11-20 11:20:00',
        owner: 'Administrator',
        subject: 'Enterprise Solution & Pricing Matrix',
        content: 'Hi Sarah, attaching our updated enterprise agreement with 500-seat licensing schedule.',
      },
    ],
    calls: [
      {
        name: 'call-1',
        status: 'Completed',
        type: 'Outbound',
        duration: '18m 45s',
        creation: '2026-11-21 14:00:00',
        summary: 'Discovery sync with procurement lead. Agreed on net-30 terms and annual prepay discount.',
      },
    ],
    notes: [
      {
        name: 'note-1',
        title: 'Key Stakeholders & Decision Criteria',
        content: 'CTO requires Azure US-East data sovereignty. CFO has sign-off threshold at $250k.',
        creation: '2026-11-19 09:30:00',
      },
    ],
    tasks: [
      {
        name: 'task-1',
        title: 'Send MSA and Order Form for signature',
        status: 'Open',
        due_date: '2026-11-24',
        creation: '2026-11-21 16:00:00',
      },
    ],
    attachments: [],
    comments: [],
  }
}

export const demoNotifications = [
  {
    name: 'notif-1',
    subject: 'Executive Deal Moved to Negotiation',
    email_content: 'Nexus Dynamics ($240,000) reached final commercial terms review.',
    read: 0,
    creation: '2026-11-21 14:30:00',
  },
  {
    name: 'notif-2',
    subject: 'New High-Value Lead Assigned',
    email_content: 'Sarah Jenkins (CloudScale Systems, $450k ARR) was assigned to you.',
    read: 0,
    creation: '2026-11-21 10:15:00',
  },
]

export function commandPaletteSearch(query = '') {
  const q = (query || '').toLowerCase()
  return {
    'CRM Lead': demoLeads
      .filter((l) => !q || l.lead_name?.toLowerCase().includes(q) || l.organization?.toLowerCase().includes(q))
      .map((l) => ({ name: l.name, title: l.lead_name, subtitle: l.organization, doctype: 'CRM Lead' })),
    'CRM Deal': demoDeals
      .filter((d) => !q || d.deal_name?.toLowerCase().includes(q) || d.organization?.toLowerCase().includes(q))
      .map((d) => ({ name: d.name, title: d.deal_name, subtitle: `${d.organization} · $${Number(d.deal_value || 0).toLocaleString()}`, doctype: 'CRM Deal' })),
    'Contact': demoContacts
      .filter((c) => !q || c.full_name?.toLowerCase().includes(q) || c.organization?.toLowerCase().includes(q))
      .map((c) => ({ name: c.name, title: c.full_name, subtitle: c.organization, doctype: 'Contact' })),
    'CRM Organization': demoOrganizations
      .filter((o) => !q || o.organization_name?.toLowerCase().includes(q))
      .map((o) => ({ name: o.name, title: o.organization_name, subtitle: o.industry, doctype: 'CRM Organization' })),
  }
}

// In-Memory Client Resource Fetcher
// Returns instantaneous responses without making ANY HTTP fetch requests over the wire.
export async function mockResourceFetcher(options) {
  let url = ''
  let params = {}

  if (typeof options === 'string') {
    url = options
  } else if (options && typeof options === 'object') {
    url = options.url || ''
    params = options.params || {}
  }

  // 1. Boot context
  if (url.includes('get_context_for_dev') || url.includes('crm.www.crm')) {
    return defaultDevBoot
  }

  // 2. Users list & info
  if (url.includes('get_users') || url.includes('get_user_info')) {
    return [mockUsers, mockUsers]
  }

  // 3. Views
  if (url.includes('get_views')) {
    return standardViews
  }

  // 3b. User Settings (frappe.model.utils.user_settings.get/save)
  if (url.includes('user_settings')) {
    return '{}'
  }

  // 4. Doctype Meta
  if (url.includes('getdoctype')) {
    const dt = params.doctype || 'CRM Lead'
    const fields = doctypeFields[dt] || []
    return {
      docs: [
        {
          name: dt,
          fields: fields,
          field_order: fields.map((f) => f.fieldname),
        },
      ],
      user_settings: '{}',
    }
  }

  // 5. Doc Data (Lists, Kanbans)
  if (url.includes('get_data')) {
    const dt = params.doctype || 'CRM Lead'
    const viewType = params.view?.view_type || 'list'
    return getDoctypeData(dt, viewType)
  }

  // 6. Home Brief
  if (url.includes('get_brief') && !url.includes('get_brief_count')) {
    return {
      total: 4,
      queue: [
        {
          name: 'task-1',
          title: 'Executive review: CloudScale 500-seat agreement',
          type: 'Task',
          status: 'Open',
          priority: 'High',
          due_date: 'Today',
        },
        {
          name: 'lead-1',
          title: 'Inbound evaluation: FinEdge Global',
          type: 'Lead',
          status: 'New',
          priority: 'High',
          due_date: 'Today',
        },
        {
          name: 'deal-1',
          title: 'Commercial proposal review: Nexus Dynamics',
          type: 'Deal',
          status: 'Negotiation',
          priority: 'Medium',
          due_date: 'Tomorrow',
        },
        {
          name: 'call-1',
          title: 'Discovery call with David Chen (Hyperion Logistics)',
          type: 'Call',
          status: 'Scheduled',
          priority: 'Medium',
          due_date: 'Tomorrow',
        },
      ],
    }
  }

  // 7. Expected Revenue
  if (url.includes('get_expected_revenue')) {
    return {
      total_expected_revenue: 1740000,
      currency: 'USD',
      percentage_change: 28.4,
    }
  }

  // 8. Pipeline Widget Data
  if (url.includes('get_pipeline_widget_data')) {
    return [
      { stage: 'Qualification', value: 190000, count: 4 },
      { stage: 'Needs Analysis', value: 420000, count: 3 },
      { stage: 'Proposal Sent', value: 940000, count: 5 },
      { stage: 'Negotiation', value: 240000, count: 2 },
      { stage: 'Closed Won', value: 310000, count: 6 },
    ]
  }

  // 9. Leads Widget Data
  if (url.includes('get_leads_widget_data')) {
    return {
      total: 84,
      new: 18,
      contacted: 32,
      qualified: 24,
      converted: 10,
    }
  }

  // 10. Deals Widget Data
  if (url.includes('get_deals_widget_data')) {
    return {
      total_count: 20,
      total_value: 2100000,
      won_count: 6,
      won_value: 310000,
    }
  }

  // 11. Sidepanel Sections
  if (url.includes('get_sidepanel_sections')) {
    const dt = params.doctype || 'CRM Lead'
    return getSidepanelSections(dt)
  }

  // 12. Activities Timeline
  if (url.includes('get_activities')) {
    return getActivities(params.name)
  }

  // 13. Client Get List (must be before Single Document Get)
  if (url.includes('frappe.client.get_list') || url.includes('get_list')) {
    const dt = params.doctype || ''
    return getList(dt, params.filters)
  }

  // 14. Single Document Get
  if (
    (url.includes('frappe.client.get') && !url.includes('frappe.client.get_list')) ||
    url.includes('get_doc')
  ) {
    const dt = params.doctype || 'CRM Lead'
    const name = params.name || params.docname
    return getDoc(dt, name)
  }

  // 15. Document Set Value
  if (url.includes('frappe.client.set_value')) {
    const dt = params.doctype || 'CRM Lead'
    const name = params.name
    const fieldname = params.fieldname
    const value = params.value
    return setValue(dt, name, fieldname, value)
  }

  // 16. Document Insert
  if (url.includes('frappe.client.insert')) {
    return insertDoc(params.doc || params)
  }

  // 17. Document Delete
  if (url.includes('frappe.client.delete')) {
    return deleteDoc(params.doctype, params.name)
  }

  // 18. Document Permissions
  if (url.includes('get_doc_permissions')) {
    return { read: 1, write: 1, create: 1, delete: 1, submit: 1, cancel: 1, amend: 1 }
  }

  // 19. Document Count
  if (url.includes('get_count')) {
    const dt = params.doctype || 'CRM Lead'
    return getList(dt).length
  }

  // 20. Single Value
  if (url.includes('get_single_value')) {
    return ''
  }

  // 21. Dashboard (Manager & Insights)
  if (url.includes('dashboard.get_dashboard')) {
    return [
      {
        name: 'total_leads',
        type: 'number_chart',
        tooltip: 'Total number of leads',
        layout: { x: 0, y: 0, w: 4, h: 3, i: 'total_leads' },
        data: {
          title: 'Total Leads',
          value: 84,
          tooltip: 'Total number of active leads in pipeline',
        },
      },
      {
        name: 'ongoing_deals',
        type: 'number_chart',
        tooltip: 'Total number of ongoing deals',
        layout: { x: 4, y: 0, w: 4, h: 3, i: 'ongoing_deals' },
        data: {
          title: 'Ongoing Deals',
          value: 14,
          tooltip: 'Active negotiations and qualified opportunities',
        },
      },
      {
        name: 'won_deals',
        type: 'number_chart',
        tooltip: 'Total number of won deals',
        layout: { x: 8, y: 0, w: 4, h: 3, i: 'won_deals' },
        data: {
          title: 'Won Deals',
          value: 6,
          tooltip: 'Successfully closed enterprise contracts',
        },
      },
      {
        name: 'average_won_deal_value',
        type: 'number_chart',
        tooltip: 'Average value of won deals',
        layout: { x: 12, y: 0, w: 4, h: 3, i: 'average_won_deal_value' },
        data: {
          title: 'Avg Won Deal Value',
          value: '$51,666',
          tooltip: 'Average ARR of closed agreements',
        },
      },
      {
        name: 'average_deal_value',
        type: 'number_chart',
        tooltip: 'Average deal value of ongoing and won deals',
        layout: { x: 16, y: 0, w: 4, h: 3, i: 'average_deal_value' },
        data: {
          title: 'Average Deal Value',
          value: '$105,000',
          tooltip: 'Average deal value across pipeline',
        },
      },
    ]
  }

  // 22. Home Layouts
  if (url.includes('get_layout') || url.includes('get_default_layout')) {
    return {
      layout: [
        { name: 'tasks', config: {}, layout: { x: 0, y: 0, w: 14, h: 8, i: 'tasks' } },
        { name: 'todays_meetings', config: {}, layout: { x: 14, y: 0, w: 6, h: 8, i: 'todays_meetings' } },
      ],
      is_default: true,
      role: 'manager',
    }
  }

  // 23. Home Counts
  if (url.includes('get_counts')) {
    return { replies_waiting: 0, follow_ups_due: 2, new_leads: 4 }
  }

  // 24. Brief Count
  if (url.includes('get_brief_count')) {
    return 4
  }

  // 25. Assigned Users
  if (url.includes('get_assigned_users')) {
    return []
  }

  // 26. Search Link (for Link.vue autocompletes)
  if (url.includes('search_link')) {
    const dt = params.doctype || ''
    const txt = (params.txt || '').toLowerCase()
    const list = getList(dt)
    return list
      .filter((item) => {
        if (!txt) return true
        const str = `${item.name || ''} ${item.title || ''} ${item.lead_name || ''} ${item.full_name || ''} ${item.organization_name || ''}`
        return str.toLowerCase().includes(txt)
      })
      .map((item) => ({
        value: item.name,
        label:
          item.lead_name ||
          item.deal_name ||
          item.full_name ||
          item.organization_name ||
          item.title ||
          item.name,
        description: item.organization || item.email || item.email_id || item.status || '',
      }))
  }

  // 27. Command Palette Search
  if (
    url.includes('command_palette.search') ||
    (url.includes('search') && !url.includes('search_link') && !url.includes('search_sqlite'))
  ) {
    return commandPaletteSearch(params.query)
  }

  // 28. Notifications
  if (url.includes('get_notifications')) {
    return demoNotifications
  }
  if (url.includes('get_unread_count')) {
    return 1
  }

  // 29. Ask Flow (CRM AI Copilot)
  if (url.includes('ask_flow')) {
    return {
      message:
        "CRM Intelligence analyzed your active pipeline: 6 deals valued at $2.1M ARR. 2 enterprise agreements with Nexus Dynamics and FinEdge Global are in final review.",
    }
  }

  // 28. Statuses Fallback
  if (
    url.includes('statuses') ||
    url.includes('CRM Lead Status') ||
    url.includes('CRM Deal Status') ||
    url.includes('CRM Availability Status')
  ) {
    return getList('CRM Lead Status')
  }

  // 29. Telemetry / Pulse
  if (url.includes('telemetry')) {
    return {}
  }

  // 30. Flow Available Check
  if (url.includes('is_flow_available')) {
    return false
  }

  // 31. Logged In User
  if (url.includes('get_logged_user')) {
    return 'Administrator'
  }

  // 32. Default Fallback
  return []
}

// In-Browser Network Interceptor for 100% Zero-API Offline Execution
export function installMockApiInterceptor() {
  if (typeof window === 'undefined') return
  if (window.__crmMockInterceptorInstalled) return
  window.__crmMockInterceptorInstalled = true

  const nativeFetch = window.fetch
  window.fetch = async function (input, init = {}) {
    let url = ''
    if (typeof input === 'string') {
      url = input
    } else if (input && typeof input === 'object' && input.url) {
      url = input.url
    }

    // Intercept any Frappe CRM API calls
    if (url.includes('/api/method/') || url.includes('/api/resource/')) {
      let params = {}
      if (init && init.body) {
        try {
          params = typeof init.body === 'string' ? JSON.parse(init.body) : init.body
        } catch {
          params = {}
        }
      } else if (url.includes('?')) {
        const queryString = url.split('?')[1]
        const sp = new URLSearchParams(queryString)
        for (const [key, val] of sp.entries()) {
          try {
            params[key] = JSON.parse(val)
          } catch {
            params[key] = val
          }
        }
      }

      const res = await mockResourceFetcher({ url, params, method: init?.method || 'GET' })
      const body =
        res && typeof res === 'object' && ('message' in res || 'docs' in res)
          ? JSON.stringify(res)
          : JSON.stringify({ message: res })

      return new Response(body, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-CRM-Mock': 'true',
        },
      })
    }

    return nativeFetch.apply(this, arguments)
  }
}
