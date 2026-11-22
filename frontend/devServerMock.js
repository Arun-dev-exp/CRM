// Standalone Dev Mock Server for CRM
// Provides instantaneous responses and realistic demo data when running without a Frappe Python backend.

import fs from 'fs'
import path from 'path'

const mockUsers = [
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

const demoLeads = [
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

const demoDeals = [
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

const demoContacts = [
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

const demoOrganizations = [
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

const demoTasks = [
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

const demoNotes = [
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
    title: 'Competitive Differentiation: Modern CRM vs Legacy Systems',
    content: 'Key winning factors in customer interviews: speed, Linear-style keyboard navigation, modern pipeline visibility, and transparent pricing.',
    owner: 'Sarah Connor',
    pinned: 0,
    creation: '2026-11-20 15:00:00',
    modified: '2026-11-20 18:30:00',
  },
]

const doctypeFields = {
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

function getDoctypeData(doctype, viewType = 'list') {
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
      }
    }
    return {
      data: demoLeads,
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
      }
    }
    return {
      data: demoDeals,
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
    }
  }

  if (doctype === 'Contact') {
    return {
      data: demoContacts,
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
    }
  }

  if (doctype === 'CRM Organization') {
    return {
      data: demoOrganizations,
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
      }
    }
    return {
      data: demoTasks,
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
    }
  }

  if (doctype === 'FCRM Note') {
    return {
      data: demoNotes,
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

export function crmDevPlugin() {
  return {
    name: 'crm-dev-mock-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''

        // Root redirect to /crm
        if (url === '/' || url === '') {
          res.writeHead(302, { Location: '/crm' })
          res.end()
          return
        }

        // Mock login endpoint
        if (url.startsWith('/login')) {
          res.writeHead(302, {
            'Set-Cookie': 'user_id=Administrator; Path=/',
            Location: '/crm',
          })
          res.end()
          return
        }

        // Static manifest and public assets
        if (url.startsWith('/assets/crm/')) {
          const relPath = url.replace(/^\/assets\/crm\//, '').split('?')[0]
          const filePath = path.resolve(import.meta.dirname, '../crm/public', relPath)
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase()
            const mimeTypes = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.svg': 'image/svg+xml',
              '.webp': 'image/webp',
              '.json': 'application/json',
              '.css': 'text/css',
              '.js': 'text/javascript',
            }
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
            fs.createReadStream(filePath).pipe(res)
            return
          }
        }

        // Only intercept /api/ calls
        if (!url.startsWith('/api/')) {
          return next()
        }

        res.setHeader('Content-Type', 'application/json')

        // 1. Boot context
        if (url.includes('crm.www.crm.get_context_for_dev')) {
          res.end(
            JSON.stringify({
              message: {
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
                translated_doctypes: {},
                translated_messages: {},
                timezone: { system: 'UTC', user: 'UTC' },
                state_options: {},
                is_insights_installed: false,
              },
            }),
          )
          return
        }

        // 2. Users
        if (url.includes('crm.api.session.get_users')) {
          res.end(JSON.stringify({ message: [mockUsers, mockUsers] }))
          return
        }

        // 3. Views
        if (url.includes('crm.api.views.get_views')) {
          const standardViews = [
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
          res.end(JSON.stringify({ message: standardViews }))
          return
        }

        // 4. Doctype Meta (frappe.desk.form.load.getdoctype)
        if (url.includes('frappe.desk.form.load.getdoctype')) {
          const u = new URL(url, 'http://localhost')
          const dt = u.searchParams.get('doctype') || 'CRM Lead'
          const fields = doctypeFields[dt] || []
          res.end(
            JSON.stringify({
              docs: [
                {
                  name: dt,
                  fields: fields,
                  field_order: fields.map((f) => f.fieldname),
                },
              ],
              user_settings: '{}',
            }),
          )
          return
        }

        // 5. Doc Data (crm.api.doc.get_data)
        if (url.includes('crm.api.doc.get_data')) {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const u = new URL(url, 'http://localhost')
              let doctype = u.searchParams.get('doctype')
              let viewType = 'list'
              if (body) {
                const parsed = JSON.parse(body)
                if (parsed.doctype) doctype = parsed.doctype
                if (parsed.view?.view_type) viewType = parsed.view.view_type
              }
              const data = getDoctypeData(doctype || 'CRM Lead', viewType)
              res.end(JSON.stringify({ message: data }))
            } catch (e) {
              const data = getDoctypeData('CRM Lead', 'list')
              res.end(JSON.stringify({ message: data }))
            }
          })
          return
        }

        // 6. Home Brief
        if (url.includes('crm.api.home.get_brief')) {
          res.end(
            JSON.stringify({
              message: {
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
              },
            }),
          )
          return
        }

        // 7. Home Expected Revenue
        if (url.includes('crm.api.home.get_expected_revenue')) {
          res.end(
            JSON.stringify({
              message: {
                total_expected_revenue: 1740000,
                currency: 'USD',
                percentage_change: 28.4,
              },
            }),
          )
          return
        }

        // 8. Home Pipeline Widget
        if (url.includes('crm.api.home.get_pipeline_widget_data')) {
          res.end(
            JSON.stringify({
              message: [
                { stage: 'Qualification', value: 190000, count: 4 },
                { stage: 'Needs Analysis', value: 420000, count: 3 },
                { stage: 'Proposal Sent', value: 940000, count: 5 },
                { stage: 'Negotiation', value: 240000, count: 2 },
                { stage: 'Closed Won', value: 310000, count: 6 },
              ],
            }),
          )
          return
        }

        // 9. Home Leads Widget
        if (url.includes('crm.api.home.get_leads_widget_data')) {
          res.end(
            JSON.stringify({
              message: {
                total: 84,
                new: 18,
                contacted: 32,
                qualified: 24,
                converted: 10,
              },
            }),
          )
          return
        }

        // 10. Home Deals Widget
        if (url.includes('crm.api.home.get_deals_widget_data')) {
          res.end(
            JSON.stringify({
              message: {
                total_count: 20,
                total_value: 2100000,
                won_count: 6,
                won_value: 310000,
              },
            }),
          )
          return
        }

        // 11. Flow available check
        if (url.includes('crm.api.flow.is_flow_available')) {
          res.end(JSON.stringify({ message: false }))
          return
        }

        // 12. Current User
        if (url.includes('frappe.auth.get_logged_user')) {
          res.end(JSON.stringify({ message: 'Administrator' }))
          return
        }

        // 13. Telemetry / Pulse
        if (url.includes('frappe.utils.telemetry')) {
          res.end(JSON.stringify({ message: {} }))
          return
        }

        // 14. Statuses
        if (url.includes('crm.api.statuses') || url.includes('CRM%20Lead%20Status') || url.includes('CRM%20Deal%20Status')) {
          res.end(
            JSON.stringify({
              message: [
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
              ],
            }),
          )
          return
        }

        // 15. Catch-all for any other /api/ call to avoid hanging
        res.end(JSON.stringify({ message: [] }))
      })
    },
  }
}
