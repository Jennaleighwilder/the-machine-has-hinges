const stages = [
  {
    id: "rumor",
    label: "I heard a rumor",
    title: "Turn rumor into a file trail",
    kicker: "First 24 hours",
    moves: [
      "Search county agendas for data center, hyperscale, large load, substation, technology campus, industrial park, and project LLC names.",
      "Check recent parcel transfers near substations, fiber corridors, rail, water mains, and industrial parks.",
      "Create one project folder and a tracker row before sharing claims publicly."
    ],
    records: [
      "county assessor parcel transfer",
      "planning board agenda",
      "secretary of state LLC record",
      "industrial development board minutes"
    ],
    demand: "Name the beneficial owner, the developer, the tenant if known, and every public approval the project needs."
  },
  {
    id: "zoning",
    label: "Zoning notice",
    title: "Force the land-use questions",
    kicker: "Before the vote",
    moves: [
      "Pull the rezoning or special-use application, site plan, staff report, and hearing packet.",
      "Ask for projected MW demand, average and peak water use, backup generation, tax incentives, and traffic/noise studies.",
      "Demand delay if the public record is missing core impact data."
    ],
    records: [
      "rezoning application",
      "special-use permit",
      "site plan",
      "staff report",
      "hearing notice"
    ],
    demand: "No rezoning or special use without full public disclosure and enforceable conditions."
  },
  {
    id: "utility",
    label: "Power upgrade",
    title: "Stop ratepayer cost shifting",
    kicker: "Utility docket",
    moves: [
      "Search the state utility commission for rate case, large load tariff, interconnection, substation, transmission, and special contract.",
      "File comments asking whether residents or small businesses are paying for grid upgrades caused by a private large-load customer.",
      "Ask for a special large-load rate class, minimum demand charges, and full interconnection-cost responsibility."
    ],
    records: [
      "integrated resource plan",
      "large-load tariff",
      "special service agreement",
      "interconnection request",
      "rate-case testimony"
    ],
    demand: "Cost-causers pay. Existing ratepayers do not finance private AI infrastructure."
  },
  {
    id: "water",
    label: "Water permit",
    title: "Make cooling demand public",
    kicker: "Water board",
    moves: [
      "Pull water service agreements, withdrawal permits, sewer-capacity letters, cooling descriptions, drought plans, and fire-suppression demand.",
      "Demand peak-day water numbers, not only annual averages.",
      "Ask whether potable water is used for cooling and whether reclaimed water is available."
    ],
    records: [
      "water withdrawal registration",
      "NPDES permit",
      "water/sewer capacity letter",
      "drought curtailment plan",
      "cooling method description"
    ],
    demand: "No water priority over residents, farms, fire protection, or watershed stability."
  },
  {
    id: "subsidy",
    label: "Tax break",
    title: "Translate jobs language into public ROI",
    kicker: "Incentive board",
    moves: [
      "Request the tax abatement, PILOT, sales/use exemption estimate, infrastructure reimbursement, bond agreement, and clawback terms.",
      "Separate construction jobs from permanent local jobs.",
      "Ask the school revenue impact and public subsidy per permanent job."
    ],
    records: [
      "tax abatement",
      "PILOT agreement",
      "infrastructure reimbursement",
      "economic impact study",
      "clawback provisions"
    ],
    demand: "No subsidy without total value, school impact, permanent jobs, clawbacks, and net public benefit."
  },
  {
    id: "contract",
    label: "Public AI contract",
    title: "Use procurement as a choke point",
    kicker: "Buyer rules",
    moves: [
      "Search city, county, school, hospital, and agency contracts for AI, cloud, analytics, model training, and data retention terms.",
      "Require vendors to disclose where public workloads run and whether public data trains private models.",
      "Make environmental, privacy, labor, audit, and exit terms mandatory in every public AI/cloud contract."
    ],
    records: [
      "vendor agreement",
      "data processing addendum",
      "model training clause",
      "cloud hosting region",
      "procurement scoring rubric"
    ],
    demand: "No public AI procurement without compute footprint, data-use limits, auditability, and exit rights."
  }
];

const pathSteps = [
  {
    number: "01",
    title: "Spot the project",
    text: "Find the first public trace before the site is locked in.",
    actions: ["Watch planning agendas", "Search land transfers", "Track industrial park announcements"]
  },
  {
    number: "02",
    title: "Name the owner",
    text: "Projects often arrive through bland LLCs. Trace registered agents and parent firms.",
    actions: ["Secretary of State search", "County deed search", "Registered agent cross-check"]
  },
  {
    number: "03",
    title: "Pull the records",
    text: "Use public-records law to collect the real documents.",
    actions: ["Emails and attachments", "Draft and final agreements", "Water, power, tax, and site studies"]
  },
  {
    number: "04",
    title: "Map power and water",
    text: "The strongest fight is usually ratepayer protection and watershed protection.",
    actions: ["IRP and utility docket search", "Water withdrawal and NPDES search", "Backup generator permit search"]
  },
  {
    number: "05",
    title: "Show up before approval",
    text: "Late outrage is weak. Early, documented public comment is leverage.",
    actions: ["Submit written comments", "Bring neighbors", "Ask for delay if files are missing"]
  },
  {
    number: "06",
    title: "Push binding rules",
    text: "The goal is enforceable conditions, not vibes.",
    actions: ["Moratorium", "Large-load tariff", "Community Benefit Agreement", "Procurement standards"]
  }
];

const lifeLenses = [
  {
    id: "resident",
    label: "Resident",
    title: "Will ordinary bills rise for private compute?",
    body: "A resident does not need to debate AI philosophy. They can ask whether a private large-load customer is shifting grid, water, sewer, road, or emergency-service costs onto households.",
    records: ["large-load tariff", "special service agreement", "rate-case testimony", "substation cost estimate"],
    demand: "Separate rate class, minimum demand charges, and written proof that residential customers are not subsidizing the project."
  },
  {
    id: "water",
    label: "Water system",
    title: "What happens on the hottest, driest day?",
    body: "Annual averages can hide peak-day stress. Water operators, farmers, fire districts, and households need the same answer: who has priority when heat, drought, and cooling demand collide?",
    records: ["water service agreement", "withdrawal registration", "peak-day demand", "drought curtailment plan"],
    demand: "Disclose source, cooling method, average and peak use, potable-water use, reclaimed-water options, and drought shutoff rules."
  },
  {
    id: "school",
    label: "School budget",
    title: "Does the tax deal help students or hollow out the base?",
    body: "Data centers can be expensive to build and low in permanent jobs. If a subsidy reduces school or county revenue, the public deserves a plain return-on-investment table.",
    records: ["tax abatement", "PILOT agreement", "school revenue impact", "clawback terms"],
    demand: "No subsidy without total public value, school impact, permanent jobs, enforceable clawbacks, and annual performance reports."
  },
  {
    id: "habitat",
    label: "Creature",
    title: "What living habitat is inside the permit boundary?",
    body: "A wetland, stream, species, or cultural landscape can turn a private project into a public review. The living world belongs in the case file too.",
    records: ["wetland delineation", "Section 404 permit", "species survey", "cultural resource review"],
    demand: "Avoidance first, then enforceable mitigation, public monitoring, and no rushed approval before habitat and cultural reviews are complete."
  }
];

const hinges = [
  {
    id: "land",
    label: "Land and zoning",
    title: "The first public gate is often local land use.",
    problem: "A data center may enter under industrial campus, technology park, warehouse, or project LLC language before residents recognize it.",
    room: "Planning commission, zoning board, county commission, city council.",
    records: ["Rezoning application", "Special-use permit", "Site plan", "Staff report", "Hearing notice", "Stormwater plan"],
    demand: "No fast-track approval without MW demand, water demand, backup power, noise, traffic, and public infrastructure cost."
  },
  {
    id: "power",
    label: "Power and rates",
    title: "The public should not subsidize private load.",
    problem: "New substations, transmission lines, generation, and reliability costs can be socialized through utility rates if regulators do not isolate the cost.",
    room: "Public utility commission, public service commission, FERC/RTO proceedings, local power board.",
    records: ["Integrated resource plan", "Large-load tariff", "Rate case", "Special contract", "Interconnection request", "Load forecast"],
    demand: "Separate large-load rate class, minimum demand charges, full interconnection-cost responsibility, and curtailment obligations."
  },
  {
    id: "water",
    label: "Water and cooling",
    title: "Average use hides peak-day stress.",
    problem: "Cooling demand can stress public systems, especially during hot days, drought, and fire events.",
    room: "Water authority, sewer board, state environmental agency, watershed authority.",
    records: ["Water withdrawal permit", "Water service agreement", "Cooling method", "Peak-day demand", "Drought plan", "Sewer capacity letter"],
    demand: "Disclose source, cooling method, average and peak use, drought curtailment, and whether potable water is used."
  },
  {
    id: "air",
    label: "Air and backup power",
    title: "Backup generators can become a hidden power plant.",
    problem: "Diesel and gas generation may trigger Clean Air Act permitting, especially when many units operate together.",
    room: "State/local air agency, EPA, public hearings, citizen-suit notice process with counsel.",
    records: ["Air construction permit", "Operating permit", "Generator inventory", "Potential-to-emit calculation", "Emergency-use limit"],
    demand: "No operation of major stationary-source pollution without lawful permits, controls, monitoring, and public review."
  },
  {
    id: "subsidy",
    label: "Taxes and subsidies",
    title: "Jobs language can hide revenue loss.",
    problem: "Data centers can be capital-intensive but low in permanent jobs, while sales/use and property tax breaks may reduce school and local revenue.",
    room: "Industrial development board, county commission, state commerce agency, auditor, school board.",
    records: ["Tax abatement", "PILOT", "Sales/use exemption", "Infrastructure reimbursement", "Job promise", "Clawback"],
    demand: "Publish subsidy value, public ROI, school impact, permanent jobs, and enforceable clawbacks."
  },
  {
    id: "culture",
    label: "Cultural resources",
    title: "Federal permits can trigger cultural review.",
    problem: "Projects affecting historic properties, sacred sites, or ancestral landscapes may require Section 106 consultation when there is federal funding, permitting, land, or licensing.",
    room: "Federal agency, SHPO, THPO, Tribal government, ACHP.",
    records: ["Area of Potential Effects", "Section 106 notice", "SHPO/THPO correspondence", "Cultural survey", "Memorandum of Agreement"],
    demand: "Good-faith consultation, public participation where appropriate, avoidance first, and enforceable mitigation if harm remains."
  },
  {
    id: "procurement",
    label: "Public procurement",
    title: "Buyers can force standards.",
    problem: "Government, schools, hospitals, and agencies may buy cloud or AI tools without knowing where workloads run, what data trains models, or what infrastructure footprint is involved.",
    room: "School board, city/county procurement, hospital board, state agency, legislative committee.",
    records: ["Cloud contract", "AI vendor agreement", "Data processing addendum", "Model training clause", "Audit rights", "Exit terms"],
    demand: "No public AI/cloud contract without environmental disclosure, privacy limits, audit rights, data-use controls, and exit rights."
  }
];

const templates = [
  {
    title: "Public records request",
    note: "Use this for county, city, utility board, water authority, or economic development records. Narrow dates and names once you know them.",
    text: `Pursuant to applicable public records law, I request all records from [date] to present concerning [project/company/site/address], including data center development, utility service, water or sewer capacity, tax incentives, zoning, environmental review, economic development agreements, public subsidies, and infrastructure upgrades.

Please include emails, attachments, calendar invitations, meeting notes, memoranda, presentations, draft agreements, executed agreements, site plans, utility studies, load forecasts, water/sewer studies, environmental analyses, incentive applications, cost-benefit analyses, and communications with company representatives, developers, utilities, consultants, attorneys, lobbyists, landowners, or related LLCs.

Search terms should include: data center, datacenter, hyperscale, AI, artificial intelligence, cloud, compute, large load, substation, transmission, water capacity, sewer capacity, tax abatement, PILOT, industrial development, economic development, confidentiality, and NDA.

If any records are withheld, please identify each withheld record and cite the specific legal basis for withholding.`
  },
  {
    title: "Utility commission comment",
    note: "Use this when a utility seeks a rate increase, large-load tariff, IRP approval, or special service agreement.",
    text: `I request that the Commission require any large-load data center customer to pay the full cost of interconnection, transmission upgrades, distribution upgrades, generation capacity, reliability impacts, and administrative costs caused by its load.

Residential and small-business ratepayers should not subsidize private AI infrastructure through generalized rate recovery, inflated load forecasts, or socialized capacity costs.

The Commission should require a separate large-load tariff, minimum demand charges, transparent service agreements, curtailment obligations during grid emergencies, and public disclosure of projected cost impacts.`
  },
  {
    title: "Three-minute meeting script",
    note: "Use this at planning boards, county commissions, water boards, and utility boards.",
    text: `I am not here to make a symbolic argument about technology. I am here to ask whether this community has been given the full public cost of this project.

Before approval, the public deserves answers: Who is the beneficial owner? How many megawatts will this facility require? Who pays for substations, transmission, and generation? How much water will be used on an average day and peak day? Will potable water be used for cooling? What tax breaks are being offered? How many permanent local jobs will be created? Are any agreements hidden under NDAs?

If a private company wants public power, public water, public infrastructure, public tax relief, or land-use permission, the public deserves full disclosure first. No blank checks. No secret contracts. No ratepayer subsidy.`
  },
  {
    title: "Temporary moratorium language",
    note: "A pause is easier to defend than a permanent ban while the jurisdiction writes rules.",
    text: `No application for rezoning, special-use permit, building permit, utility extension, water or sewer connection, tax incentive, or infrastructure reimbursement related to data center development shall be approved for [6/12] months while the jurisdiction studies impacts on electricity demand, water use, noise, emissions, emergency services, tax revenue, land use, and residential utility rates.

During the moratorium, staff shall prepare recommended standards requiring public disclosure of projected megawatt demand, water use, backup generation, noise levels, tax incentives, permanent job creation, public infrastructure costs, and ratepayer impacts.`
  },
  {
    title: "Community Benefit Agreement demands",
    note: "Start with demands that can be measured and enforced.",
    text: `Any Community Benefit Agreement should require:

1. Public disclosure of owner, tenant, developer, MW demand, water demand, cooling method, backup power, and subsidies.
2. Independent energy, water, noise, air, and ratepayer impact studies paid by the developer.
3. Binding water caps, drought curtailment, and reclaimed-water use where feasible.
4. Full payment of grid, water, sewer, road, and emergency service upgrades caused by the project.
5. Local hiring, apprenticeship, and living-wage standards.
6. Community monitoring funds, enforcement penalties, and termination rights if promises are breached.`
  },
  {
    title: "Public AI procurement rule",
    note: "Use this for schools, cities, counties, hospitals, and agencies buying cloud or AI services.",
    text: `No public entity should purchase AI or cloud services unless the vendor discloses:

1. Whether public data may be used to train or tune private models.
2. The data center regions used for public workloads.
3. Energy, water, and emissions reporting for the relevant workload or region where available.
4. Independent audit rights for privacy, security, bias, and environmental claims.
5. Data retention, deletion, and model-output appeal procedures.
6. Exit rights and data portability if the vendor changes terms or fails disclosure obligations.`
  }
];

const laws = [
  {
    tag: "NEPA",
    title: "Environmental review",
    use: ["Major federal actions may require Environmental Assessment or Environmental Impact Statement review.", "Look for federal funding, federal land, federal permits, transmission corridors, or agency approvals."],
    link: "https://www.epa.gov/nepa/environmental-impact-statement-filing-guidance"
  },
  {
    tag: "CWA",
    title: "Water and wetlands",
    use: ["NPDES, Section 401 water quality certification, and Section 404 dredge/fill permits may matter when a project touches discharge, streams, wetlands, or water quality.", "State and tribal certification can be a leverage point."],
    link: "https://www.epa.gov/cwa-404/clean-water-laws-regulations-and-executive-orders-related-section-404"
  },
  {
    tag: "CAA",
    title: "Air permits",
    use: ["Backup diesel or gas generation may require construction and operating permits.", "Ask whether many generators are being treated as one stationary source and whether potential-to-emit limits are enforceable."],
    link: "https://www.epa.gov/stationary-sources-air-pollution/clean-air-act-resources-data-centers"
  },
  {
    tag: "FERC/PUC",
    title: "Ratepayer protection",
    use: ["Large loads can trigger utility tariffs, transmission rules, special service agreements, and cost allocation fights.", "Ask who pays and whether ordinary customers subsidize upgrades."],
    link: "https://www.ferc.gov/news-events/news/ferc-orders-action-co-location-issues-related-data-centers-running-ai"
  },
  {
    tag: "NHPA 106",
    title: "Historic and cultural sites",
    use: ["Federal undertakings that may affect historic properties or sites of tribal religious/cultural significance can trigger Section 106 review.", "Consult SHPO, THPO, and Tribal governments early."],
    link: "https://www.achp.gov/digital-library-section-106-landing/infrastructure-questions-and-answers"
  },
  {
    tag: "Public Records",
    title: "The paper trail",
    use: ["Public records law gets emails, agreements, permits, staff reports, calendars, and economic development files.", "Ask for records, not explanations."],
    link: "https://comptroller.tn.gov/office-functions/open-records-counsel/open-meetings/frequently-asked-questions/tennessee-public-records-act-faqs.html"
  }
];

const trackerRows = [
  ["Project name", "Public-facing name and any code name", "agenda packet, news release, staff report"],
  ["Shell LLC", "Legal entity on deeds, permits, and applications", "county deed records, secretary of state"],
  ["Beneficial owner", "Parent company, developer, landlord, tenant, finance backer", "business filings, SEC filings, permits, press releases"],
  ["Parcel and acreage", "Site address, parcel IDs, land footprint", "county assessor, GIS, planning packet"],
  ["MW demand", "Projected peak and average power draw", "utility docket, IRP, service agreement"],
  ["Water demand", "Average and peak gallons/day plus water source", "water authority, TDEC/agency permit viewer"],
  ["Cooling method", "Evaporative, dry, liquid, hybrid, reclaimed water", "site plan, engineering memo, water records"],
  ["Backup generation", "Diesel/gas turbines, batteries, run-hour limits", "air permits, EPA/state air database"],
  ["Public incentives", "Tax abatements, sales/use exemptions, PILOT, reimbursements", "economic development board, county commission"],
  ["Permanent jobs", "Operations jobs, not construction jobs", "incentive application, staff report"],
  ["Hearing dates", "Planning, zoning, utility, water, tax votes", "public agendas, notices"],
  ["Risk score", "High if secrecy, huge load, water stress, subsidy, weak job yield, or rushed vote", "your campaign tracker"]
];

const sources = [
  {
    tag: "Policy toolkit",
    title: "North Star Data Center Policy Toolkit",
    note: "Local and state interventions: zoning, land use, energy, water, subsidies, transparency, and moratoria.",
    url: "https://datacenters.ainowinstitute.org/"
  },
  {
    tag: "Community playbook",
    title: "NAACP Stop Dirty Data Centers",
    note: "Frontline recommendations, community involvement, transparency, and Community Benefit Agreement resources.",
    url: "https://naacp.org/campaigns/stop-dirty-data-centers"
  },
  {
    tag: "Organizing toolkit",
    title: "Food & Water Watch Stop Data Centers Now",
    note: "Campaign materials and moratorium advocacy for communities opposing harmful data center buildouts.",
    url: "https://www.foodandwaterwatch.org/2026/01/22/stop-data-centers-now-campaign-launch/"
  },
  {
    tag: "Energy scale",
    title: "IEA Key Questions on Energy and AI",
    note: "IEA estimates global data center electricity use grew in 2025 and projects roughly doubling by 2030.",
    url: "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary"
  },
  {
    tag: "US energy",
    title: "EPRI Powering Intelligence 2026",
    note: "EPRI projects U.S. data centers could rise from about 4-5% of U.S. electricity generation today to 9-17% by 2030.",
    url: "https://powering-intelligence.epri.com/executive-summary.html"
  },
  {
    tag: "Water",
    title: "EESI Data Centers and Water Consumption",
    note: "Explains direct water use, indirect water for power generation, and chip manufacturing water footprint.",
    url: "https://www.eesi.org/articles/view/data-centers-and-water-consumption"
  },
  {
    tag: "Media source",
    title: "Wild and Scenic River video",
    note: "Bureau of Land Management river footage used for the human-level living-world section.",
    url: "https://commons.wikimedia.org/wiki/File:South_Fork_Clackamas_Wild_and_Scenic_River_(28539305236).webm"
  },
  {
    tag: "Media source",
    title: "Dixie Valley toad wetland image",
    note: "Wildlife and wetland image used to teach habitat and permit stakes.",
    url: "https://commons.wikimedia.org/wiki/File:Dixie_Valley_toad_in_its_wetland_habitat._(52201219510).jpg"
  },
  {
    tag: "Media source",
    title: "Town hall meeting image",
    note: "Public meeting image used to show the human room where local power can enter.",
    url: "https://commons.wikimedia.org/wiki/File:District_staff_attend_town_hall_meeting_(9301794023).jpg"
  },
  {
    tag: "Media source",
    title: "California drought and farmers image",
    note: "Drought and livelihood image used to connect peak-day water demand to real people.",
    url: "https://commons.wikimedia.org/wiki/File:Barack_Obama_speaks_with_farmers_about_California_drought,_2014.jpg"
  },
  {
    tag: "Subsidies",
    title: "Good Jobs First on data center tax breaks",
    note: "Shows disclosure gaps and why communities should demand full subsidy and job-performance reporting.",
    url: "https://goodjobsfirst.org/most-states-fail-to-disclose-which-data-center-companies-get-huge-tax-breaks/"
  },
  {
    tag: "Ratepayers",
    title: "FERC co-location review",
    note: "FERC opened review of large loads such as AI-enabled data centers at generation facilities in PJM.",
    url: "https://www.ferc.gov/news-events/news/ferc-orders-action-co-location-issues-related-data-centers-running-ai"
  },
  {
    tag: "Air",
    title: "EPA Clean Air Act resources for data centers",
    note: "Federal resources for air permitting and stationary-source issues relevant to data centers and on-site generation.",
    url: "https://www.epa.gov/stationary-sources-air-pollution/clean-air-act-resources-data-centers"
  },
  {
    tag: "Local permits",
    title: "TDEC Data and Map Viewers",
    note: "Tennessee portal for air, water, permits, inspections, and environmental records.",
    url: "https://www.tn.gov/environment/about-tdec/tdec-dataviewers.html"
  },
  {
    tag: "Regional power",
    title: "TVA Integrated Resource Plan",
    note: "TVA planning process and Environmental Impact Statement materials for long-term electricity supply.",
    url: "https://www.tva.com/irp"
  },
  {
    tag: "Culture",
    title: "ACHP Section 106 infrastructure Q&A",
    note: "Explains when infrastructure projects require historic preservation review and tribal consultation.",
    url: "https://www.achp.gov/digital-library-section-106-landing/infrastructure-questions-and-answers"
  },
  {
    tag: "Grid mapping",
    title: "OpenStreetMap substation tagging",
    note: "Reference for mapping substations and transmission infrastructure in OSM when visible on the ground.",
    url: "https://wiki.openstreetmap.org/wiki/Tag%3Apower%3Dsubstation"
  },
  {
    tag: "Grid data",
    title: "EIA electric system operating data",
    note: "Open federal data for RTO/balancing authority demand, generation, and power flows.",
    url: "https://www.eia.gov/opendata/browser/electricity/rto"
  },
  {
    tag: "Case study",
    title: "NAACP lawsuit over xAI gas turbines",
    note: "Example of Clean Air Act enforcement claims around on-site generation for an AI data center.",
    url: "https://naacp.org/articles/naacp-sues-xai-illegal-pollution-data-center-power-plant"
  }
];

const stageButtons = document.getElementById("stageButtons");
const stageOutput = document.getElementById("stageOutput");
const pathGrid = document.getElementById("pathGrid");
const hingeList = document.getElementById("hingeList");
const hingeDetail = document.getElementById("hingeDetail");
const templateGrid = document.getElementById("templateGrid");
const lawGrid = document.getElementById("lawGrid");
const trackerRowsEl = document.getElementById("trackerRows");
const sourceGrid = document.getElementById("sourceGrid");
const stateSelect = document.getElementById("stateSelect");
const stateOutput = document.getElementById("stateOutput");
const lensButtons = document.getElementById("lensButtons");
const lensOutput = document.getElementById("lensOutput");
const impactInputs = {
  mw: document.getElementById("mwInput"),
  water: document.getElementById("waterInput"),
  subsidy: document.getElementById("subsidyInput"),
  jobs: document.getElementById("jobsInput")
};

let selectedStage = stages[0].id;
let selectedHinge = hinges[0].id;
let selectedLens = lifeLenses[0].id;

function renderLifeLensButtons() {
  if (!lensButtons || !lensOutput) return;

  lensButtons.innerHTML = lifeLenses
    .map(
      (lens) => `<button type="button" class="${lens.id === selectedLens ? "active" : ""}" data-lens="${lens.id}" aria-pressed="${lens.id === selectedLens}">${lens.label}</button>`
    )
    .join("");

  lensButtons.querySelectorAll("[data-lens]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedLens = button.dataset.lens;
      renderLifeLensButtons();
      renderLifeLensOutput();
    });
  });
}

function renderLifeLensOutput() {
  if (!lensOutput) return;
  const lens = lifeLenses.find((item) => item.id === selectedLens);
  lensOutput.innerHTML = `
    <h3>${lens.title}</h3>
    <p>${lens.body}</p>
    <div>
      <strong>Records to pull</strong>
      <ul>${lens.records.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <p><strong>Demand:</strong> ${lens.demand}</p>
  `;
}

function renderStageButtons() {
  stageButtons.innerHTML = stages
    .map(
      (stage) => `<button type="button" class="${stage.id === selectedStage ? "active" : ""}" data-stage="${stage.id}" aria-pressed="${stage.id === selectedStage}">${stage.label}</button>`
    )
    .join("");

  stageButtons.querySelectorAll("[data-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedStage = button.dataset.stage;
      renderStageButtons();
      renderStageOutput();
    });
  });
}

function renderStageOutput() {
  const stage = stages.find((item) => item.id === selectedStage);
  stageOutput.innerHTML = `
    <span class="stage-kicker">${stage.kicker}</span>
    <h3>${stage.title}</h3>
    <div>
      <strong>Do this next</strong>
      <ul>${stage.moves.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div>
      <strong>Records to request</strong>
      <ul>${stage.records.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <p><strong>Demand:</strong> ${stage.demand}</p>
  `;
}

function renderPath() {
  pathGrid.innerHTML = pathSteps
    .map(
      (step) => `
        <article class="path-card">
          <span class="step-number">${step.number}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
          <ul>${step.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderHinges() {
  hingeList.innerHTML = hinges
    .map(
      (hinge) => `
        <button type="button" class="hinge-button ${hinge.id === selectedHinge ? "active" : ""}" data-hinge="${hinge.id}">
          <span>${hinge.label}</span>
          <span aria-hidden="true">+</span>
        </button>
      `
    )
    .join("");

  hingeList.querySelectorAll("[data-hinge]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedHinge = button.dataset.hinge;
      renderHinges();
      renderHingeDetail();
    });
  });
}

function renderHingeDetail() {
  const hinge = hinges.find((item) => item.id === selectedHinge);
  hingeDetail.innerHTML = `
    <p class="eyebrow">${hinge.label}</p>
    <h3>${hinge.title}</h3>
    <p>${hinge.problem}</p>
    <div class="detail-grid">
      <div class="detail-box">
        <strong>Room to enter</strong>
        <p>${hinge.room}</p>
      </div>
      <div class="detail-box">
        <strong>Demand</strong>
        <p>${hinge.demand}</p>
      </div>
    </div>
    <div>
      <strong>Records to pull</strong>
      <ul>${hinge.records.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function renderTemplates() {
  templateGrid.innerHTML = templates
    .map(
      (template, index) => `
        <article class="template-card">
          <h3>${template.title}</h3>
          <p>${template.note}</p>
          <pre id="template-${index}">${template.text}</pre>
          <button class="copy-button" type="button" data-copy="${index}">Copy template</button>
        </article>
      `
    )
    .join("");

  templateGrid.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const template = templates[Number(button.dataset.copy)];
      try {
        await navigator.clipboard.writeText(template.text);
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = "Copy template";
        }, 1600);
      } catch {
        button.textContent = "Select text above";
      }
    });
  });
}

function renderLaws() {
  lawGrid.innerHTML = laws
    .map(
      (law) => `
        <article class="law-card">
          <span class="law-tag">${law.tag}</span>
          <h3>${law.title}</h3>
          <ul>${law.use.map((item) => `<li>${item}</li>`).join("")}</ul>
          <a href="${law.link}" target="_blank" rel="noreferrer">Read source</a>
        </article>
      `
    )
    .join("");
}

function renderTrackerRows() {
  trackerRowsEl.innerHTML = trackerRows
    .map(
      ([field, entry, source]) => `
        <tr>
          <td><strong>${field}</strong></td>
          <td>${entry}</td>
          <td>${source}</td>
        </tr>
      `
    )
    .join("");
}

function renderSources() {
  sourceGrid.innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <span class="source-tag">${source.tag}</span>
          <h3>${source.title}</h3>
          <p>${source.note}</p>
          <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
        </article>
      `
    )
    .join("");
}

function searchLink(label, query) {
  return `<a href="https://www.google.com/search?q=${encodeURIComponent(query)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderStateFinder() {
  if (!stateSelect || !stateOutput) return;

  stateSelect.innerHTML = states
    .map((state) => `<option value="${state.abbr}">${state.name}</option>`)
    .join("");

  function updateState() {
    const state = states.find((item) => item.abbr === stateSelect.value) || states[0];
    const name = state.name;
    const coreTerms = [
      `"${name}" "data center" "large load tariff"`,
      `"${name}" "data center" "water withdrawal permit"`,
      `"${name}" "data center" "tax abatement"`,
      `"${name}" "data center" "rezoning"`,
      `"${name}" "hyperscale" "substation"`
    ];

    stateOutput.innerHTML = `
      <h3>${name}: first 30-minute pull</h3>
      <p>Open these doors first. Then replace the state name with your county, city, utility, project LLC, and street address.</p>
      <div class="state-link-grid">
        ${searchLink("Utility / PUC dockets", `${name} public utility commission data center large load tariff`)}
        ${searchLink("Environmental permits", `${name} environmental agency data center air water permit`)}
        ${searchLink("Business entity search", `${name} secretary of state business search data center LLC`)}
        ${searchLink("Tax subsidies", `${name} data center tax exemption abatement jobs clawback`)}
        ${searchLink("Public records law", `${name} public records act request emails data center`)}
        ${searchLink("Local zoning packets", `${name} county data center rezoning special use permit substation`)}
      </div>
      <div>
        <strong>Search terms to copy</strong>
        <ul>${coreTerms.map((term) => `<li>${term}</li>`).join("")}</ul>
      </div>
      <p><strong>Teaching rule:</strong> Never publish a claim from a search result alone. Use search to find the official docket, agenda, permit, contract, or public record.</p>
    `;
  }

  stateSelect.addEventListener("change", updateState);
  stateSelect.value = "VA";
  updateState();
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function initImpactLab() {
  const mwOutput = document.getElementById("mwOutput");
  const waterOutput = document.getElementById("waterOutput");
  const subsidyOutput = document.getElementById("subsidyOutput");
  const jobsOutput = document.getElementById("jobsOutput");
  const homesResult = document.getElementById("homesResult");
  const poolsResult = document.getElementById("poolsResult");
  const jobCostResult = document.getElementById("jobCostResult");

  if (!impactInputs.mw || !homesResult) return;

  function updateLab() {
    const mw = Number(impactInputs.mw.value);
    const water = Number(impactInputs.water.value);
    const subsidy = Number(impactInputs.subsidy.value);
    const jobs = Number(impactInputs.jobs.value);
    const homes = Math.round((mw * 1000) / 1.3);
    const pools = water / 0.66;
    const jobCost = jobs > 0 ? subsidy / jobs : 0;

    mwOutput.textContent = `${mw} MW`;
    waterOutput.textContent = `${water.toFixed(1)} million gal/day`;
    subsidyOutput.textContent = `$${subsidy}M`;
    jobsOutput.textContent = formatNumber(jobs);
    homesResult.textContent = formatNumber(homes);
    poolsResult.textContent = pools.toFixed(1);
    jobCostResult.textContent = `$${jobCost.toFixed(1)}M`;
  }

  Object.values(impactInputs).forEach((input) => {
    if (input) input.addEventListener("input", updateLab);
  });

  updateLab();
}

function initSprint() {
  const checks = Array.from(document.querySelectorAll(".sprint-check"));
  const bar = document.getElementById("sprintProgress");
  const status = document.getElementById("sprintStatus");
  if (!checks.length || !bar || !status) return;

  const saved = JSON.parse(localStorage.getItem("fieldSprint") || "[]");
  checks.forEach((check, index) => {
    check.checked = Boolean(saved[index]);
  });

  function updateSprint() {
    const states = checks.map((check) => check.checked);
    const complete = states.filter(Boolean).length;
    const percent = Math.round((complete / checks.length) * 100);
    bar.style.width = `${percent}%`;
    status.textContent = `${complete} of ${checks.length} moves complete.`;
    localStorage.setItem("fieldSprint", JSON.stringify(states));
  }

  checks.forEach((check) => check.addEventListener("change", updateSprint));
  updateSprint();
}

function initRevealMotion() {
  const panels = Array.from(document.querySelectorAll(".reveal"));
  if (!panels.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    panels.forEach((panel) => panel.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  panels.forEach((panel) => observer.observe(panel));
}

const translations = {
  en: {
    heroTitle: "Stop arguing with the cloud. Follow the permits.",
    heroLede:
      "AI data centers are not just software. They are land, electricity, water, tax incentives, air permits, utility contracts, shell LLCs, and local votes. This site gives residents a step-by-step way to force those facts into public view.",
    doctrine:
      "Operating doctrine: Cost-causers pay. Public resources require public accounting. No blank checks for private compute empires."
  },
  es: {
    heroTitle: "Deja de discutir con la nube. Sigue los permisos.",
    heroLede:
      "Los centros de datos de IA no son solo software. Son terreno, electricidad, agua, incentivos fiscales, permisos de aire, contratos de servicios publicos, sociedades LLC y votos locales. Este sitio da a residentes un camino paso a paso para llevar esos hechos a la vista publica.",
    doctrine:
      "Doctrina: quien causa el costo debe pagarlo. Los recursos publicos requieren contabilidad publica. No cheques en blanco para imperios privados de computo."
  }
};

const mapMarkers = [
  {
    name: "Northern Virginia",
    coords: [39.0438, -77.4874],
    topic: "Cluster pressure",
    body: "A teaching example for zoning saturation, grid buildout, noise, tax revenue dependence, and large-load planning.",
    pull: ["county zoning packets", "state utility filings", "noise ordinances", "tax impact reports"]
  },
  {
    name: "Memphis / Mid-South",
    coords: [35.1495, -90.049],
    topic: "Air permits and power",
    body: "A teaching example for on-site generation, Clean Air Act questions, frontline communities, and regional power planning.",
    pull: ["air permits", "EPA/state air records", "TVA planning materials", "community health comments"]
  },
  {
    name: "Central Ohio",
    coords: [39.9612, -82.9988],
    topic: "Large-load tariffs",
    body: "A teaching example for utility cost allocation, interconnection queues, economic development incentives, and ratepayer protection.",
    pull: ["large-load tariff", "PUC dockets", "interconnection studies", "tax abatement agreements"]
  },
  {
    name: "Georgia / Atlanta region",
    coords: [33.749, -84.388],
    topic: "Water and subsidies",
    body: "A teaching example for water records, tax exemptions, county-level agreements, and shell-company tracing.",
    pull: ["water use records", "county deeds", "development agreements", "state subsidy disclosures"]
  },
  {
    name: "Phoenix / Arizona",
    coords: [33.4484, -112.074],
    topic: "Water-stress siting",
    body: "A teaching example for drought rules, cooling-method disclosure, reclaimed water, and peak-day demand.",
    pull: ["water withdrawal permits", "drought plans", "cooling method documents", "city water board minutes"]
  },
  {
    name: "The Dalles / Oregon",
    coords: [45.5946, -121.1787],
    topic: "Municipal water disclosure",
    body: "A teaching example for public-records fights around water use and municipal infrastructure.",
    pull: ["municipal water records", "city council minutes", "public records logs", "environmental reviews"]
  },
  {
    name: "Dallas / North Texas",
    coords: [32.7767, -96.797],
    topic: "Grid growth and land",
    body: "A teaching example for transmission buildout, industrial campuses, and local control before approvals.",
    pull: ["ERCOT/utility filings", "substation plans", "industrial park documents", "county zoning records"]
  },
  {
    name: "Iowa / Council Bluffs",
    coords: [41.2619, -95.8608],
    topic: "Tax and water accounting",
    body: "A teaching example for long-running data center incentives and public benefit claims.",
    pull: ["incentive agreements", "water records", "school revenue impact", "job reports"]
  }
];

const states = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["DC", "District of Columbia"], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"],
  ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"],
  ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"],
  ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"],
  ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"],
  ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"]
].map(([abbr, name]) => ({ abbr, name }));

function applyLanguage(language) {
  const pack = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (pack[key]) {
      if (key === "doctrine") {
        element.innerHTML = `<strong>${pack[key].split(":")[0]}:</strong>${pack[key].slice(pack[key].indexOf(":") + 1)}`;
      } else {
        element.textContent = pack[key];
      }
    }
  });
}

function initAccessibilityControls() {
  const fontUp = document.getElementById("fontUp");
  const fontReset = document.getElementById("fontReset");
  const toggleDyslexia = document.getElementById("toggleDyslexia");
  const toggleContrast = document.getElementById("toggleContrast");
  const languageSelect = document.getElementById("languageSelect");

  let scale = Number(localStorage.getItem("fontScale") || "1");
  document.body.style.setProperty("--font-scale", `${scale}rem`);
  document.body.classList.toggle("dyslexia-mode", localStorage.getItem("dyslexiaMode") === "true");
  document.body.classList.toggle("high-contrast", localStorage.getItem("highContrast") === "true");
  toggleDyslexia.setAttribute("aria-pressed", String(document.body.classList.contains("dyslexia-mode")));
  toggleContrast.setAttribute("aria-pressed", String(document.body.classList.contains("high-contrast")));

  fontUp.addEventListener("click", () => {
    scale = Math.min(scale + 0.08, 1.32);
    document.body.style.setProperty("--font-scale", `${scale}rem`);
    localStorage.setItem("fontScale", String(scale));
  });

  fontReset.addEventListener("click", () => {
    scale = 1;
    document.body.style.setProperty("--font-scale", "1rem");
    localStorage.setItem("fontScale", "1");
  });

  toggleDyslexia.addEventListener("click", () => {
    document.body.classList.toggle("dyslexia-mode");
    const active = document.body.classList.contains("dyslexia-mode");
    toggleDyslexia.setAttribute("aria-pressed", String(active));
    localStorage.setItem("dyslexiaMode", String(active));
  });

  toggleContrast.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
    const active = document.body.classList.contains("high-contrast");
    toggleContrast.setAttribute("aria-pressed", String(active));
    localStorage.setItem("highContrast", String(active));
  });

  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video").forEach((video) => video.pause());
  }
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const box = canvas.getBoundingClientRect();
  canvas.width = Math.floor(box.width * ratio);
  canvas.height = Math.floor(box.height * ratio);
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return { ctx, width: box.width, height: box.height };
}

function drawAxes(ctx, width, height, maxValue) {
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#d9d0c2";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = 20 + ((height - 52) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(38, y);
    ctx.lineTo(width - 12, y);
    ctx.stroke();
    ctx.fillStyle = "#5c615d";
    ctx.font = "12px sans-serif";
    ctx.fillText(String(Math.round(maxValue - (maxValue / 4) * i)), 4, y + 4);
  }
}

function drawGlobalEnergyChart() {
  const canvas = document.getElementById("globalEnergyChart");
  const { ctx, width, height } = setupCanvas(canvas);
  const points = [
    { year: "2025", value: 485 },
    { year: "2030", value: 950 }
  ];
  const maxValue = 1000;
  drawAxes(ctx, width, height, maxValue);
  const left = 44;
  const right = width - 20;
  const bottom = height - 30;
  const top = 20;

  ctx.strokeStyle = "#b83a2f";
  ctx.lineWidth = 4;
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = index === 0 ? left : right;
    const y = bottom - (point.value / maxValue) * (bottom - top);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  points.forEach((point, index) => {
    const x = index === 0 ? left : right;
    const y = bottom - (point.value / maxValue) * (bottom - top);
    ctx.fillStyle = "#b83a2f";
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#151515";
    ctx.font = "700 13px sans-serif";
    ctx.fillText(`${point.value} TWh`, Math.min(x - 24, width - 76), y - 12);
    ctx.font = "12px sans-serif";
    ctx.fillText(point.year, x - 14, height - 8);
  });
}

function drawUSRangeChart() {
  const canvas = document.getElementById("usRangeChart");
  const { ctx, width, height } = setupCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const bars = [
    { label: "Today", low: 4, high: 5, color: "#235b7a" },
    { label: "2030", low: 9, high: 17, color: "#b83a2f" }
  ];
  const max = 20;
  const left = 56;
  const usable = width - 92;

  ctx.fillStyle = "#5c615d";
  ctx.font = "12px sans-serif";
  [0, 5, 10, 15, 20].forEach((tick) => {
    const x = left + (tick / max) * usable;
    ctx.strokeStyle = "#d9d0c2";
    ctx.beginPath();
    ctx.moveTo(x, 28);
    ctx.lineTo(x, height - 34);
    ctx.stroke();
    ctx.fillText(`${tick}%`, x - 10, height - 10);
  });

  bars.forEach((bar, index) => {
    const y = 58 + index * 72;
    const x1 = left + (bar.low / max) * usable;
    const x2 = left + (bar.high / max) * usable;
    ctx.fillStyle = "#151515";
    ctx.font = "700 14px sans-serif";
    ctx.fillText(bar.label, 8, y + 7);
    ctx.strokeStyle = bar.color;
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.stroke();
    ctx.fillStyle = bar.color;
    ctx.font = "700 13px sans-serif";
    ctx.fillText(`${bar.low}-${bar.high}%`, x2 - 30, y - 18);
  });
}

function drawWaterStackChart() {
  const canvas = document.getElementById("waterStackChart");
  const { ctx, width, height } = setupCanvas(canvas);
  ctx.clearRect(0, 0, width, height);
  const segments = [
    { label: "On-site cooling", value: 34, color: "#235b7a" },
    { label: "Electricity generation", value: 46, color: "#1f6f57" },
    { label: "Chip manufacturing", value: 20, color: "#c2791b" }
  ];
  const left = 20;
  const top = 62;
  const barWidth = width - 40;
  let x = left;
  segments.forEach((segment) => {
    const w = (segment.value / 100) * barWidth;
    ctx.fillStyle = segment.color;
    ctx.fillRect(x, top, w, 48);
    ctx.fillStyle = "#151515";
    ctx.font = "700 13px sans-serif";
    ctx.fillText(`${segment.value}%`, x + 8, top + 30);
    x += w;
  });
  segments.forEach((segment, index) => {
    const y = 138 + index * 22;
    ctx.fillStyle = segment.color;
    ctx.fillRect(20, y - 10, 14, 14);
    ctx.fillStyle = "#151515";
    ctx.font = "13px sans-serif";
    ctx.fillText(segment.label, 42, y + 2);
  });
  ctx.fillStyle = "#5c615d";
  ctx.font = "12px sans-serif";
  ctx.fillText("Teaching model. Verify categories locally.", 20, 26);
}

function renderCharts() {
  drawGlobalEnergyChart();
  drawUSRangeChart();
  drawWaterStackChart();
}

function initMap() {
  const panelTitle = document.getElementById("mapPanelTitle");
  const panelBody = document.getElementById("mapPanelBody");
  const panelList = document.getElementById("mapPanelList");

  function updatePanel(marker) {
    panelTitle.textContent = `${marker.name}: ${marker.topic}`;
    panelBody.textContent = marker.body;
    panelList.innerHTML = marker.pull.map((item) => `<li>${item}</li>`).join("");
  }

  if (!window.L) {
    updatePanel(mapMarkers[0]);
    return;
  }

  const map = L.map("usaMap", {
    scrollWheelZoom: false,
    keyboard: true
  }).setView([39.5, -98.35], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  mapMarkers.forEach((marker) => {
    const pin = L.circleMarker(marker.coords, {
      radius: 9,
      color: "#151515",
      fillColor: "#b83a2f",
      fillOpacity: 0.88,
      weight: 2
    }).addTo(map);
    pin.bindPopup(`<strong>${marker.name}</strong>${marker.topic}<br><button type="button" data-map-name="${marker.name}">Show records</button>`);
    pin.on("click", () => updatePanel(marker));
  });

  map.on("popupopen", (event) => {
    const button = event.popup.getElement().querySelector("[data-map-name]");
    if (button) {
      button.addEventListener("click", () => {
        const marker = mapMarkers.find((item) => item.name === button.dataset.mapName);
        updatePanel(marker);
      });
    }
  });

  updatePanel(mapMarkers[0]);
}

renderStageButtons();
renderStageOutput();
renderLifeLensButtons();
renderLifeLensOutput();
renderPath();
renderHinges();
renderHingeDetail();
renderTemplates();
renderLaws();
renderTrackerRows();
renderSources();
renderStateFinder();
initAccessibilityControls();
initImpactLab();
initSprint();
initRevealMotion();
renderCharts();
initMap();

window.addEventListener("resize", () => {
  clearTimeout(window.__chartResize);
  window.__chartResize = setTimeout(renderCharts, 150);
});
