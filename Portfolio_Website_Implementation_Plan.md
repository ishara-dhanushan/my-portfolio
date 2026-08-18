# SOFTWARE ENGINEERING PORTFOLIO

**Portfolio Website - Implementation Plan**

_Content architecture, visual direction, Next.js structure, and launch roadmap_

| **Prepared for**      | **Ishara Dhanushan**                                                      |
| --------------------- | ------------------------------------------------------------------------- |
| **Primary goal**      | A futuristic, professional portfolio focused only on software engineering |
| **Deployment**        | Next.js static export through GitHub Actions to GitHub Pages              |
| **Recommended model** | One-page professional overview with dedicated project case-study pages    |

> **Scope decision**
>
> Research projects, volunteering information, lecturer references, hackathons, competitions, awards, and other achievement content are intentionally excluded. Named ByteSquad Labs work projects are also excluded from the portfolio project gallery and case studies. The portfolio will include generalized software-engineering internship experience, all non-work projects from the current portfolio, a dedicated Tech Stack, engineering capabilities, complete education details, academic performance, certifications, dynamically loaded Medium articles, and relevant professional information.

Version 1.0 \| August 2026

# Document guide

This plan is organized as a working specification. It defines what the portfolio should contain, how the content should be structured, and how the Next.js application should be implemented.

| **No.** | **Section**               | **Purpose**                                                             |
| ------- | ------------------------- | ----------------------------------------------------------------------- |
| 1       | Architecture decision     | Single page versus multiple pages                                       |
| 2       | Positioning and audience  | What the portfolio should communicate                                   |
| 3       | Main-page content         | Exact section order, Tech Stack, Medium articles, and content inventory |
| 4       | Project case studies      | Featured projects, supporting projects, and templates                   |
| 5       | Education and credentials | Degree, academic performance, and certifications                        |
| 6       | Visual direction          | Restrained futuristic design system                                     |
| 7       | Next.js architecture      | Server Components, metadata, routes, and folders                        |
| 8       | Implementation roadmap    | Phases, acceptance criteria, and launch checklist                       |

# Executive recommendation

> **Use a hybrid structure**
>
> Keep the professional overview on one main page. Create separate pages only for detailed project case studies. Do not create separate top-level pages for About, Experience, Tech Stack, Education, or Contact.

This model gives recruiters a complete overview without requiring repeated navigation, while still providing enough depth for technical reviewers who want to inspect major projects.

> **Current skeleton alignment**
>
> Version 1.0 is now aligned with the implemented portfolio skeleton. The current dark visual system, one-blue-accent approach, 1200 px content width, rounded card language, Poppins body typography, Montserrat heading typography, and JetBrains Mono technical labels are treated as the working website design direction. The content order is adjusted so About is the first full content section after the introductory hero/proof area, followed immediately by Education and academic performance.

## Recommended routes

| **Route**                  | **Type**            | **Content**                                                                                                                                                               |
| -------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /                          | Main portfolio      | Hero and proof strip, About, education and academic performance, experience, all projects, Tech Stack, engineering capabilities, certifications, Medium articles, contact |
| /projects/constructpro     | Featured case study | Construction ERP architecture, role, engineering decisions, and screenshots                                                                                               |
| /projects/kochi-guru-pizza | Featured case study | Client project, authentication, ordering flow, and admin functions                                                                                                        |
| /projects/fuelwise         | Featured case study | Multi-role system, Spring Boot backend, React/Flutter clients, and quota workflow                                                                                         |

The portfolio should keep exactly these three dedicated case-study routes for Version 1.0. All remaining projects should appear as supporting cards on the main page rather than receiving separate pages.

# 1. Architecture decision

## Why the main portfolio should remain one page

- Recruiters can scan the complete profile in a few minutes without opening multiple pages.

- Anchor navigation makes About, Education, Experience, Projects, Tech Stack, Articles, and Contact immediately accessible.

- The strongest information remains close together, improving the professional story.

- A one-page overview is easier to maintain and performs well as a static GitHub Pages site.

- Mobile navigation stays simple and predictable.

## Why project details should use separate pages

- A serious project needs more space for the problem, role, architecture, decisions, challenges, and outcomes.

- Dedicated metadata allows each project to have its own search and social-sharing title, description, and preview image.

- Each case study receives a permanent link that can be shared in job applications or LinkedIn posts.

- The main page remains focused instead of becoming excessively long.

## Pages that should not be created

| **Avoid route** | **Reason**                                                                               |
| --------------- | ---------------------------------------------------------------------------------------- |
| /about          | About content is short and belongs on the landing page.                                  |
| /tech-stack     | The Tech Stack is a concise landing-page section and does not need a separate route.     |
| /experience     | There is currently one main internship; a separate page would feel sparse.               |
| /education      | Education and academic performance fit naturally within the complete landing-page story. |
| /contact        | A footer contact area and direct actions are sufficient.                                 |

## Final page model

1.  The home page introduces the engineer and provides the complete professional overview.

2.  Three featured project cards link to the fixed project case-study routes.

3.  All eight additional personal, academic, client, mobile, and UI/UX projects from the current portfolio remain available as supporting cards on the home page.

4.  ByteSquad Labs work projects must not appear in the project gallery or receive case-study pages. The internship remains in the Experience section using generalized responsibilities and engineering practices.

5.  Resume, GitHub, LinkedIn, email, and live demos remain direct external or downloadable links. The home page also loads the latest Medium articles dynamically in the visitor's browser.

# 2. Positioning and audience

## Primary positioning

> **Professional identity**
>
> Software Engineer focused on full-stack web applications, REST APIs, modular backend systems, and user-focused product development.

The portfolio should present 'fourth-year Software Engineering undergraduate' as context, not as the main headline. The main message should be based on practical engineering capability and delivery experience.

## Primary audience

| **Audience**                                  | **What they need**                                                      |
| --------------------------------------------- | ----------------------------------------------------------------------- |
| Recruiters and hiring managers                | Quickly confirm role fit, stack, experience, and project evidence.      |
| Software engineers and technical interviewers | Inspect architecture, implementation decisions, and contribution scope. |
| Potential clients or collaborators            | Understand the types of systems that can be designed and delivered.     |

## Content principles

- Lead with evidence, not adjectives.

- Describe contributions with clear action verbs and realistic ownership boundaries.

- Connect every important technology to a project or internship example.

- Prefer working features, architecture, and engineering decisions over long theory.

- Avoid skill percentages, progress bars, and unsupported labels such as 'expert'.

- Use email as the primary contact method. The phone number may be included as an optional secondary contact only if comfortable publishing it.

# 3. Main-page content specification

The home page should be built as a sequence of focused sections. Each section must have one purpose and a clear connection to the next section. In the current skeleton, the proof strip can remain as its own component for maintainability, but it should visually read as a continuation of the hero rather than as a separate navigable content section.

| **Order** | **Section**               | **Purpose**                                               |
| --------- | ------------------------- | --------------------------------------------------------- |
| 01        | Header                    | Identity, anchor navigation, resume action                |
| 02        | Hero + professional proof | Role, value proposition, calls to action, fast evidence   |
| 03        | About                     | Professional background, engineering focus, working style |
| 04        | Education and academics   | Degree, academic domains, GPA, and A/L performance        |
| 05        | Experience                | ByteSquad Labs responsibilities and engineering practices |
| 06        | Featured projects         | Three strongest project case studies                      |
| 07        | Supporting projects       | Additional web, mobile, and UI/UX builds                  |
| 08        | Tech Stack                | Curated technologies grouped by engineering area          |
| 09        | Engineering capabilities  | Practices that show how the stack is applied              |
| 10        | Certifications            | Relevant professional and technical certifications        |
| 11        | Medium articles           | Latest software-engineering writing loaded at runtime     |
| 12        | Contact and footer        | Clear next action and verified professional links         |

## 3.1 Header

Required items:

- Text logo or initials: Ishara Dhanushan / ID.

- Anchor links: About, Education, Experience, Projects, Tech Stack, Articles, Contact.

- Primary action: Download CV.

- Optional secondary action: GitHub icon link.

- Mobile menu implemented as an isolated Client Component.

## 3.2 Hero and professional proof

| **Item**         | **Recommended content**                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Eyebrow          | Software Engineer • Full-Stack Development                                                                                                                                     |
| Headline         | Building reliable web products and scalable application systems.                                                                                                               |
| Supporting text  | Fourth-year Software Engineering undergraduate with hands-on experience in production web applications, REST APIs, Chrome extensions, secure integrations, and agile delivery. |
| Primary CTA      | View Projects                                                                                                                                                                  |
| Secondary CTA    | Download CV                                                                                                                                                                    |
| Supporting links | GitHub, LinkedIn, Medium, Email                                                                                                                                                |

Optional visual: a professional portrait or a restrained abstract interface graphic. Do not use a large animated 3D scene that competes with the headline.

The professional proof strip should stay directly below the hero and share the same introductory visual rhythm. It does not need its own navigation item. Keeping `ProofSection.tsx` as a separate Server Component is still appropriate because it keeps the data and layout modular.

| **Proof label** | **Evidence**                                      |
| --------------- | ------------------------------------------------- |
| Experience      | 6-month Software Engineering internship           |
| Delivery        | Production web applications and Chrome extensions |
| Core stack      | Next.js, React, TypeScript, Node.js, NestJS       |
| Backend         | REST APIs, JWT, RBAC, PostgreSQL, MongoDB         |
| Academics       | B.Sc. Software Engineering; current GPA 3.51/4.00 |

## 3.3 About

About text should be limited to two short paragraphs. It should explain the engineering focus, practical experience, learning mindset, and collaborative working style without repeating the hero section.

Recommended supporting details:

- Fourth-year Software Engineering undergraduate based in Kurunegala, Sri Lanka.

- Practical experience across full-stack web applications, REST APIs, browser extensions, mobile applications, debugging, refactoring, and agile delivery.

- Interest in building scalable, maintainable, and user-focused software products.

Placement rule:

- About should be the **first full content section** after the hero/proof introduction.

- Do not place About below Projects, Tech Stack, or Engineering Capabilities. Visitors should understand who the engineer is before they inspect the detailed evidence.

- Keep the section concise so moving it earlier improves context without slowing down the page.

## 3.4 Education and academic performance

Education should be displayed as a dedicated section because the degree, GPA, academic domains, and A/L results strengthen the overall profile. Use a clean timeline or two-card layout rather than hiding these details inside the About section.

| **Level**                                    | **Institution and period**                             | **Academic performance and details**                                                                                                             |
| -------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| B.Sc. (Hons.) Software Engineering           | University of Kelaniya, Sri Lanka; July 2023 - Present | Current GPA: 3.51/4.00. Academic domains: Advanced Web Applications, Mobile Computing Applications, and Data Science & Engineering Applications. |
| GCE Advanced Level - Physical Science Stream | Sri Sumangala College, Wariyapola; 2019 - 2022         | Z-Score: 1.61. Combined Mathematics: B, Physics: A, Chemistry: B.                                                                                |

Presentation rules:

- Place the current degree first and give the GPA clear visual prominence without making it look like a dashboard metric.

- Show academic domains as compact text or tags only when they support the software-engineering profile.

- Keep A/L results concise and secondary to the university degree.

- Do not include research projects or research methodology in this section.

Placement rule:

- Education should appear immediately after About because the portfolio represents a current fourth-year undergraduate.

- This early placement gives recruiters the degree and GPA context before they reach professional experience and project depth.

- Keep the university degree visually dominant and the A/L result block more compact.

## 3.5 Experience

Display the ByteSquad Labs internship as one strong experience entry rather than several disconnected cards. The experience section may describe responsibilities, technologies, and engineering practices, but it must not present ByteSquad client or internal work as personal portfolio projects.

- Role: Software Engineering Intern

- Period: September 2025 - March 2026

- Stack: Next.js, React, TypeScript, Node.js, Express.js, MongoDB

- Summary: contributed to production-grade web applications and browser extensions involving REST APIs, secure integrations, analytics, user workflows, and agile delivery.

General contribution highlights:

- Implemented and improved full-stack product features across frontend and backend modules.

- Integrated third-party APIs and secure transaction or access-control workflows.

- Built responsive interfaces, browser-extension interactions, streaming data experiences, and state-management improvements.

- Debugged and refactored existing code, improved maintainability, and resolved integration issues.

- Translated Figma designs into working interfaces and refined usability based on product requirements.

- Worked in Jira-based sprints using Git collaboration, code reviews, environment configuration, and release verification.

Portfolio boundary:

- Do not name or showcase ByteSquad work projects such as client platforms, internal products, or browser extensions in the Projects section.

- Do not publish confidential screenshots, private repositories, internal architecture, customer information, or proprietary implementation details.

- Use the internship only as evidence of professional experience and engineering practice.

## 3.6 Featured projects

| **Priority** | **Project**      | **Reason**                        | **Presentation**     |
| ------------ | ---------------- | --------------------------------- | -------------------- |
| 1            | ConstructPro ERP | Most complete architecture story  | Dedicated case study |
| 2            | Kochi Guru Pizza | Real client and product workflow  | Dedicated case study |
| 3            | FuelWise.lk      | Multi-role, multi-platform system | Dedicated case study |

### Featured project card content

- Project name and concise product category.

- One-sentence outcome-focused summary.

- Four to six relevant technology tags.

- Contribution or role statement.

- One strong screenshot or interface mockup.

- Actions: View Case Study, GitHub, Live Demo when available.

## 3.7 Supporting projects

The main Projects section should include every non-ByteSquad project currently represented in the existing portfolio ZIP. The project gallery therefore contains three featured projects and eight supporting projects.

### Complete project inventory for Version 1.0

| **Project**                  | **Category and ownership**                  | **Core evidence**                                                                                        | **Presentation**                                               |
| ---------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ConstructPro ERP             | Web/ERP; group and client-oriented; ongoing | Next.js, TypeScript, NestJS, PostgreSQL, Prisma, Docker, REST APIs, JWT, RBAC                            | Featured card, dedicated case study, GitHub/demo when verified |
| Kochi Guru Pizza             | Web; client project; ongoing                | Next.js, Express.js, MongoDB, JWT authentication, menu, cart, ordering, admin workflows                  | Featured card, dedicated case study, GitHub, Live Demo         |
| FuelWise.lk                  | Web and mobile; group project               | Spring Boot, React, Flutter, MySQL, quota tracking, station and admin workflows                          | Featured card, dedicated case study, GitHub, Demo Video        |
| BrewHub                      | Web; individual project                     | MERN stack, Tailwind CSS, responsive menu, cart, orders, authentication                                  | Supporting card, GitHub, Live Demo                             |
| Advertisement.lk             | Web; group/client project                   | React.js, Node.js, Express.js, MongoDB, authentication, advertisement management, payment-based boosting | Supporting card, GitHub                                        |
| Multi-Role User Registration | Web; individual project                     | Spring Boot, Next.js, Java, MySQL, role-based access control, SOLID and design-pattern application       | Supporting card, GitHub                                        |
| FindYourMechanic.lk          | Web; group project                          | HTML, CSS, JavaScript, PHP, MySQL, mechanic discovery, booking, role-based workflows                     | Supporting card, GitHub                                        |
| Finance Tracker App          | Mobile; individual project                  | Flutter, Firebase, Provider, synchronization, budget planning, financial insights                        | Supporting card, GitHub                                        |
| TaskMaster                   | Mobile; individual project                  | React Native CLI, Zustand, AsyncStorage, task creation and completion tracking                           | Supporting card, GitHub, Demo Video                            |
| HabitBuddy                   | Mobile; individual project                  | React Native CLI, Zustand, AsyncStorage, authentication, habit tracking and persistence                  | Supporting card, GitHub, Demo Video                            |
| BookHub                      | UI/UX; group project                        | Figma prototype, dashboard design, navigation, and book-borrowing workflows                              | Supporting card, Figma Design                                  |

### Supporting-card content

Each supporting project card should contain:

- Project name and category.

- Ownership label such as Individual, Group, Client, Completed, or Ongoing.

- A short outcome-focused description based on the implemented features.

- Three to five technology tags.

- One screenshot or prototype preview.

- Verified GitHub, live demo, demo video, or Figma link when available.

- A clear note about the individual contribution for group projects.

### Project-gallery behavior

- Show the three featured projects first with larger cards and **View Case Study** actions.

- Display the eight supporting projects in a responsive grid below the featured cards.

- Include category filters only when they remain simple and accessible: All, Web, Mobile, and UI/UX.

- Do not hide valid projects only because they use an older or secondary technology. Their visual priority can be lower than the current core stack, but they still demonstrate development breadth.

- Do not add ByteSquad Labs work projects to this gallery, even when screenshots or technical details are available.

- Keep exactly three dedicated project pages in Version 1.0. Supporting cards link only to their available repository, demo, video, or design resources.

## 3.8 Tech Stack

The portfolio must include a distinct **Tech Stack** section. Its purpose is to let a recruiter understand the technologies used in real software-engineering work within a few seconds. This section must be curated from the current CVs, internship work, and project evidence rather than copied from the legacy portfolio.

### Recommended technology groups

| **Group**                     | **Technologies to display**                                                                                                                | **Supporting evidence**                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core frontend                 | TypeScript, Next.js, React.js, JavaScript, Tailwind CSS                                                                                    | Current Next.js portfolio, ConstructPro ERP, Kochi Guru Pizza, BrewHub, Advertisement.lk, Multi-Role User Registration, and internship web interfaces                           |
| Backend and APIs              | Node.js, Express.js, NestJS, Spring Boot, REST APIs                                                                                        | Internship production experience, ConstructPro ERP, Kochi Guru Pizza, BrewHub, Advertisement.lk, FuelWise.lk, and Multi-Role User Registration                                  |
| Databases and data access     | PostgreSQL, MongoDB, MySQL, Firebase, Prisma                                                                                               | ConstructPro ERP, Kochi Guru Pizza, BrewHub, Advertisement.lk, FuelWise.lk, Multi-Role User Registration, FindYourMechanic.lk, Finance Tracker App, and internship applications |
| Mobile development            | React Native, Flutter, Dart, Zustand, AsyncStorage, Provider                                                                               | TaskMaster, HabitBuddy, Finance Tracker App, and FuelWise.lk mobile development                                                                                                 |
| Languages and web foundations | TypeScript, JavaScript, Java, Dart, PHP, HTML, CSS                                                                                         | Technologies supported by the current CVs and the complete non-work project inventory                                                                                           |
| Architecture and security     | JWT authentication, role-based access control, modular service architecture, microservices architecture, SOLID principles, design patterns | ConstructPro ERP, Kochi Guru Pizza, Multi-Role User Registration, and secure API work completed during the internship                                                           |
| Tools and delivery            | Git, GitHub, Docker, Postman, Jira, Vercel, Neon, Figma                                                                                    | Version control, API testing, sprint delivery, deployment, database hosting, and UI implementation workflows                                                                    |

### Content hierarchy

- Give the strongest current stack the highest visual priority: TypeScript, Next.js, React.js, Node.js, Express.js or NestJS, PostgreSQL, and MongoDB.

- Present Java, Spring Boot, React Native, Flutter, MySQL, Prisma, Dart, and supporting tools as additional demonstrated experience.

- Keep HTML and CSS as web foundations rather than presenting them as the main professional identity.

- Keep integration-specific technologies such as Solana APIs, OpenAI APIs, and X402 inside the relevant experience or project content instead of allowing them to dominate the general Tech Stack.

### Presentation rules

- Use grouped technology cards or rows rather than one long, unstructured logo wall.

- Show a readable technology name beside every icon; do not rely on logo recognition alone.

- Do not use percentage bars, star ratings, years-of-experience counters, or unsupported proficiency labels.

- A technology should appear only when it is supported by a current CV entry, internship contribution, or project.

- Do not automatically carry Angular, Kotlin, VS Code, Power BI, or any other item forward merely because it appears in the legacy portfolio. PHP may remain as demonstrated project experience through FindYourMechanic.lk, but it should not receive the same visual priority as the current TypeScript and Java stack.

- Prefer local SVG assets in `public/icons/tech/` or a consistent Simple Icons package. Do not depend on arbitrary third-party image URLs that can break after deployment.

- Use monochrome or visually restrained icons by default so the section remains consistent with the one-accent futuristic design.

- Each category may include a short evidence line, such as “Used in ConstructPro ERP, Kochi Guru Pizza, and production internship work,” to make the stack more credible.

### Recommended section structure

1. Section heading: **Tech Stack**.

2. One-line introduction: “Technologies I use to design, build, test, and deliver software products.”

3. A visually emphasized **Core Stack** row.

4. Smaller grouped cards for Backend and APIs, Databases, Mobile, Architecture and Security, and Tools and Delivery.

5. Optional links from selected technologies to the project cards that demonstrate them; this can be added after the initial launch.

## 3.9 Engineering capabilities

The Engineering Capabilities section should explain how the technologies are applied. It should not repeat the same technology list from the Tech Stack section.

- Maintainable component, module, and service structure.

- Protected APIs, input validation, and consistent error handling.

- Authentication and role-based authorization.

- REST API design and third-party integration workflows.

- Debugging, refactoring, and incremental codebase improvement.

- Responsive UI implementation from Figma designs.

- Git-based collaboration, code review, and sprint-based delivery.

- Static deployment, environment configuration, and release verification.

- Clear contribution boundaries in team and client projects.

## 3.10 Certifications

| **Certification**                | **Issuer**        |
| -------------------------------- | ----------------- |
| Java Object-Oriented Programming | LinkedIn Learning |
| GitHub Foundation                | GitHub            |
| Flutter & Dart for Beginners     | Udemy             |

Presentation rules:

- Use simple credential cards or a compact two-column list.

- Add verification links only when a valid public credential URL is available.

- Keep the section limited to relevant professional and technical certifications.

- Exclude hackathons, competitions, awards, volunteering roles, research activities, and lecturer references.

## 3.11 Medium articles

The portfolio must include a dedicated **Latest Articles** section that displays recent Medium posts dynamically. New posts must appear without rebuilding or redeploying the Next.js application.

### Section purpose

- Demonstrate technical communication and continuous software-engineering learning.

- Give recruiters direct evidence of how technical ideas, implementation decisions, and development experiences are explained.

- Keep visitors inside the portfolio long enough to discover recent writing while still linking every article to Medium.

### Article card content

| **Item**         | **Required content**                                             |
| ---------------- | ---------------------------------------------------------------- |
| Title            | Exact Medium article title                                       |
| Publication date | Human-readable date derived from the feed response               |
| Summary          | Short plain-text excerpt with a consistent length                |
| Cover image      | Feed image when available; otherwise use a local fallback image  |
| Categories       | Relevant software-engineering tags when supplied by the feed API |
| Action           | External **Read on Medium** link opened safely in a new tab      |

Display the latest three articles on the home page. A fourth to sixth article may be shown on larger screens only when the cards remain easy to scan. Include a **View all articles on Medium** action below the cards.

### Dynamic update requirement

- Fetch the feed in the visitor's browser after the static page loads.

- Do not fetch Medium posts only during `next build` because build-time data becomes stale when no new GitHub Actions deployment occurs.

- Do not use a Next.js Route Handler, Server Action, API route, or request-time Next.js server. GitHub Pages does not provide that runtime.

- Read the feed through a CORS-enabled external RSS-to-JSON endpoint or a small independently hosted edge proxy. The external endpoint may be a managed RSS API or a Cloudflare Worker, but it must remain separate from the Next.js application.

- Store the endpoint in `NEXT_PUBLIC_MEDIUM_FEED_API_URL` so the provider can be replaced without redesigning the component.

- The browser-side component should request fresh data at runtime. New Medium posts become visible as soon as the selected feed endpoint exposes them; a portfolio rebuild is not required.

### Reliability and content rules

- Keep the data-provider logic behind a small adapter instead of coupling the UI directly to one API response format.

- Validate the response before rendering and limit the number of accepted items.

- Use `AbortController` and a reasonable request timeout.

- Cache the last successful response in `localStorage` with a short expiry. Show the cached articles immediately when available, then refresh from the network after the expiry. This improves resilience without making the feed permanently stale.

- Provide loading skeletons, an error state, an empty state, and a permanent fallback link to the Medium profile.

- Convert article descriptions to safe plain text. Do not inject untrusted feed HTML with `dangerouslySetInnerHTML`.

- Filter the feed to software-engineering content using returned categories or a configurable allowlist. Research, volunteering, competition, award, and unrelated posts must not appear in the portfolio section.

- Do not copy the legacy portfolio's exact API integration. Reuse only the general browser-fetching idea and implement it through a typed, replaceable, and failure-tolerant feed layer.

## 3.12 Contact and footer

- Contact headline: Let's build useful software together.

- Primary contact method: email.

- Optional secondary contact: phone number, only if comfortable publishing it.

- Professional links: GitHub, LinkedIn, Medium.

- Optional availability note: open to software engineering opportunities and collaborations.

- Footer: name, current year, technology note, and back-to-top link.

# 4. Project case-study specification

Every featured project page should follow the same information structure. Consistency makes projects easier to compare and reduces design complexity.

| **Order** | **Block**             | **Required content**                                             |
| --------- | --------------------- | ---------------------------------------------------------------- |
| 1         | Project header        | Name, category, status, short summary, stack, links              |
| 2         | Context               | Business or user problem and target users                        |
| 3         | Role                  | What Ishara owned, contributed, or collaborated on               |
| 4         | Solution              | Main workflows and implemented features                          |
| 5         | Architecture          | Frontend, backend, database, integrations, deployment            |
| 6         | Engineering decisions | Important choices and why they were suitable                     |
| 7         | Challenges            | Specific technical problem, resolution, and learning             |
| 8         | Outcome               | Working result, delivery status, or demonstrated value           |
| 9         | Gallery               | Screenshots, responsive views, API flow, or architecture diagram |
| 10        | Next improvements     | Realistic future enhancements                                    |

## 4.1 ConstructPro ERP

| **Item**          | **Content**                                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Category          | Construction management ERP; group/client-oriented ongoing project                                                           |
| Stack             | Next.js, TypeScript, NestJS, PostgreSQL, Prisma, Docker                                                                      |
| System scope      | Leads, quotations, construction projects, invoices, payments, documents, analytics                                           |
| Contribution      | Backend modules, REST APIs, JWT authentication, role-based access control, PostgreSQL integration, modular service structure |
| Evidence          | Architecture diagram, module overview, API examples, role/permission flow, invoice/payment screens                           |
| Important wording | Clearly state the individual contribution inside the group project.                                                          |

## 4.2 Kochi Guru Pizza

| **Item**          | **Content**                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Category          | Client pizza-shop web application; ongoing                                               |
| Stack             | Next.js, Express.js, MongoDB                                                             |
| Implemented       | JWT-based session handling and protected user-profile endpoints                          |
| Current scope     | Menu management, cart, order processing, and admin dashboard                             |
| Evidence          | Customer ordering flow, menu screens, authentication flow, API structure, admin features |
| Important wording | Separate completed features from features currently being developed.                     |

## 4.3 FuelWise.lk

| **Item**          | **Content**                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| Category          | Multi-role fuel quota management platform; group project                            |
| Stack             | Spring Boot, React, Flutter, MySQL                                                  |
| System scope      | User, fuel-station, and administrator workflows                                     |
| Core value        | Real-time quota tracking, station-level fuel updates, and distribution management   |
| Evidence          | Role flow, backend API structure, web/mobile screens, quota transaction sequence    |
| Important wording | State the modules or features directly contributed to; do not claim full ownership. |

## Project evidence checklist

- At least one clear desktop screenshot for each featured project.

- One representative screenshot or prototype image for every supporting project whenever a usable asset is available in the current portfolio ZIP.

- Mobile screenshot where responsive or mobile work is important.

- Verified repository and demo links; hide links that are private, incomplete, or broken.

- Short architecture diagram using the same restrained visual system as the website.

- Accurate project status: completed, ongoing, client work, individual, or group.

- No confidential client data, private API keys, private dashboards, or sensitive repository information.

# 5. Visual direction

## Design concept: Precision Interface

The site should feel futuristic through structure, depth, motion, typography, and technical detail—not through many bright colors. The preferred direction is a restrained developer-tool and product-dashboard aesthetic.

| **Token**     | **Current skeleton direction** | **Use**                                         |
| ------------- | ------------------------------ | ----------------------------------------------- |
| Background    | Zinc 950 / near black          | Primary site canvas                             |
| Surface       | Zinc 900                       | Cards, panels, alternate section surfaces       |
| Surface hover | Zinc 800                       | Hover emphasis and secondary interactive states |
| Text          | Zinc 50 and Zinc 400           | Primary and muted text                          |
| Accent        | Blue 500 with Blue 400 hover   | Links, buttons, focus states, selected tags     |
| Accent subtle | Blue 950 / Blue 300            | Technology tags and restrained badge surfaces   |
| Borders       | Zinc 800                       | Card edges and section separation               |

> **Color rule**
>
> Use one accent color only. Do not mix blue, purple, cyan, green, and pink gradients across sections. The futuristic effect should come from refinement, not saturation.

## Typography

The website typography should follow the current skeleton rather than the earlier generic font recommendation.

| **Role**            | **Family**     | **Recommended weights** | **Use**                                                                  |
| ------------------- | -------------- | ----------------------- | ------------------------------------------------------------------------ |
| Body and general UI | Poppins        | 400, 500, 600           | Paragraphs, navigation, buttons, supporting copy                         |
| Headings            | Montserrat     | 600, 700, 800           | Hero heading, section headings, card titles                              |
| Technical accent    | JetBrains Mono | Variable/default        | Eyebrows, dates, project ownership labels, tags, small technical details |

Implementation rules:

- Continue loading all three families with `next/font/google` in `src/app/layout.tsx`.

- Keep the existing CSS aliases: `--font-sans`, `--font-heading`, and `--font-mono`.

- Use Poppins as the default body family and Montserrat only where hierarchy is needed.

- Use JetBrains Mono sparingly; it should signal technical metadata, not become the main reading font.

- Maintain strong hierarchy: a large Montserrat hero heading, clear Montserrat section headings, and compact Poppins supporting text.

- Keep line lengths comfortable and avoid extremely thin font weights.

## Layout rules

- Use the current `max-w-[1200px]` content container as the default maximum width.

- Keep the current spacing rhythm: approximately `py-20` for standard sections, a larger hero (`py-24` to `sm:py-32`), and a larger final contact block.

- Two-column layout only where it improves scanning; stack content on mobile.

- Use asymmetry carefully in the hero or featured project cards, but keep content alignment disciplined.

- Keep the current rounded visual language: `rounded-2xl` for content cards and `rounded-full` for buttons and tags, with low-contrast borders.

## Motion rules

- Use short fade, slide, and stagger effects for section entry.

- Use subtle hover elevation, border emphasis, or image movement on project cards.

- Avoid continuous background animation, excessive cursor effects, and long page transitions.

- Respect prefers-reduced-motion and ensure all information is available without animation.

- Keep Framer Motion inside small Client Components instead of converting entire pages to client rendering.

## Visual assets

- Professional portrait or restrained abstract developer interface in the hero.

- High-quality project screenshots placed inside consistent browser/device frames.

- Simple architecture diagrams with dark surfaces, gray connectors, and one blue accent.

- Lucide icons used consistently; avoid mixing unrelated icon families.

# 6. Next.js implementation architecture

> **Important terminology**
>
> All page.tsx files should remain React Server Components. Because the site uses output: 'export', these components are executed during the build and exported as static HTML. This is not request-time server-side rendering.

## 6.1 Page-component rule

- Do not add 'use client' to any page.tsx file.

- Do not add 'use client' to the root layout.tsx file.

- Every page.tsx must export page-specific metadata using metadata or generateMetadata.

- Move hooks, browser APIs, event-driven state, mobile menus, and Framer Motion into dedicated Client Components.

- Keep imports at the top of every file; do not use dynamic imports for this portfolio structure.

- Prefer data-driven Server Components for sections, project cards, and case-study content.

## 6.2 Metadata strategy

| **File**                           | **Responsibility**       | **Required metadata**                                                           |
| ---------------------------------- | ------------------------ | ------------------------------------------------------------------------------- |
| src/app/layout.tsx                 | Global defaults          | metadataBase, title template, default description, creator, Open Graph defaults |
| src/app/page.tsx                   | Home metadata            | Portfolio title, main description, canonical path, home preview image           |
| src/app/projects/\[slug\]/page.tsx | Dynamic project metadata | Project title, summary, canonical path, project preview image                   |

### Static home-page example

```tsx
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MediumPostsSection } from "@/components/sections/MediumPostsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Ishara Dhanushan's software engineering portfolio, featuring full-stack applications, REST APIs, backend systems, and mobile projects.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProofSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <CapabilitiesSection />
      <CredentialsSection />
      <MediumPostsSection />
      <ContactSection />
    </main>
  );
}
```

### Dynamic project-page example

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { getProjectBySlug, projects } from "@/data/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.hasCaseStudy)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.ogImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
```

## 6.3 Server and Client Component boundaries

| **Type**          | **Examples**                                                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Server Components | page.tsx, layout.tsx, static section content, Tech Stack groups, project cards, case-study layout, metadata, Medium section wrapper |
| Client Components | Mobile menu, theme toggle if added, animated reveal wrapper, interactive gallery, copy-email button, runtime Medium feed fetching   |
| Avoid             | Marking the full home page or full project page as a Client Component only to enable animation                                      |

### Recommended animation boundary

Keep section content as Server Components and wrap only the animated element with a small Client Component such as Reveal, MotionCard, or MobileMenu. This preserves metadata support and reduces client-side JavaScript.

## 6.4 Dynamic Medium feed architecture

The Medium section is the intentional exception to the otherwise static content model. Its heading and layout remain server-rendered, while a small Client Component loads article data at runtime.

| **Part**                 | **Responsibility**                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MediumPostsSection.tsx` | Server Component that renders the section heading, explanation, semantic wrapper, and Client Component boundary                                                                |
| `MediumPostsFeed.tsx`    | Client Component that loads the current feed after hydration and manages loading, success, empty, and error states                                                             |
| `MediumPostCard.tsx`     | Presentational card for a validated article item                                                                                                                               |
| `medium-feed.ts`         | Typed browser-safe adapter that builds the external feed URL, validates provider data, normalizes fields, strips HTML, filters categories, and returns a stable internal model |
| External feed endpoint   | Converts the Medium RSS feed into CORS-enabled JSON; hosted independently from Next.js                                                                                         |
| `localStorage` cache     | Stores the last valid normalized response and its timestamp for short-term resilience                                                                                          |

### Request flow

1. GitHub Pages returns the statically exported home page.

2. `page.tsx` remains a Server Component and includes page metadata.

3. The Medium section wrapper renders as static HTML with an accessible loading area.

4. After hydration, `MediumPostsFeed.tsx` checks the short-lived browser cache.

5. When a refresh is required, the browser calls `NEXT_PUBLIC_MEDIUM_FEED_API_URL` directly.

6. The adapter validates and normalizes the response before the UI receives it.

7. The newest accepted software-engineering articles replace the loading or cached state.

This flow does not require a portfolio rebuild and does not depend on a Next.js server.

### Provider strategy

Use a provider-neutral internal model. The first implementation may use a reputable RSS-to-JSON service. For better long-term control, the same endpoint contract can later be implemented with a Cloudflare Worker or another external edge function that proxies the Medium RSS feed and sets appropriate CORS headers. Changing providers should require only the environment URL or adapter mapping to change, not the page layout.

## 6.5 Recommended source structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProofSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── CredentialsSection.tsx
│   │   ├── MediumPostsSection.tsx
│   │   ├── MediumPostsFeed.tsx
│   │   └── ContactSection.tsx
│   ├── articles/
│   │   └── MediumPostCard.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCaseStudy.tsx
│   │   └── ProjectGallery.tsx
│   └── ui/
│       ├── ButtonLink.tsx
│       ├── SectionHeading.tsx
│       ├── TechItem.tsx
│       └── Reveal.tsx
├── data/
│   └── portfolio.ts
├── lib/
│   └── medium-feed.ts
├── types/
│   └── portfolio.ts
└── utils/
    └── assetPrefix.ts

public/
├── documents/
│   └── ishara-dhanushan-cv.pdf
├── images/
│   ├── profile/
│   ├── projects/
│   └── social/
└── icons/
    └── tech/
```

## 6.6 Data model

Store repeatable content in src/data/portfolio.ts and define interfaces in src/types/portfolio.ts. This keeps page components clean and ensures the same project information drives cards, case studies, metadata, and links.

| **Entity**         | **Suggested fields**                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Profile            | name, role, summary, location, email, resume, social links                                                                   |
| Experience         | company, role, period, stack, summary, highlights                                                                            |
| Project            | slug, title, category, ownership, summary, status, role, stack, links, images, featured flag, and optional case-study blocks |
| Technology group   | category, technologies, isCore, supporting evidence, optional icon identifiers                                               |
| Capability         | title, summary, supporting evidence                                                                                          |
| Education          | level, institution, period, location, GPA or Z-score, subjects, grades, academic domains                                     |
| Medium post        | title, link, publication date, excerpt, thumbnail, categories                                                                |
| Medium feed config | public endpoint URL, profile URL, maximum items, cache duration, allowed categories                                          |
| Credential         | name, issuer, type, year, optional link                                                                                      |

## 6.7 GitHub Pages and static-export rules

- Keep output: 'export' enabled for deployment builds.

- Retain images.unoptimized because GitHub Pages has no Next.js image-optimization server.

- Generate every dynamic project route with generateStaticParams.

- Use dynamicParams = false so unknown project slugs are not expected at runtime.

- Use the existing assetPrefix/basePath approach for repository-path deployment.

- Test all images, CV links, internal routes, and canonical paths with the production prefix.

- Do not use Server Actions, request-time Next.js APIs, Route Handlers, middleware, ISR, or other features that require a running Next.js server.

- Fetch Medium articles at runtime from `MediumPostsFeed.tsx` through a CORS-enabled external endpoint.

- Store the public endpoint in `NEXT_PUBLIC_MEDIUM_FEED_API_URL`; do not expose private credentials in the static application.

- Verify the provider's CORS policy, response contract, rate limits, and failure behavior before launch.

- A feed outage must affect only the article section; the rest of the portfolio must remain usable.

## 6.8 Root metadata and social preview assets

- Set metadataBase in layout.tsx to the final GitHub Pages or custom-domain URL.

- Use a title template such as '%s \| Ishara Dhanushan'.

- Add a static 1200 x 630 Open Graph image in public/images/social/.

- Use a separate project preview image for each featured case study when possible.

- Add a favicon, apple-touch icon, and clear page descriptions.

# 7. Implementation roadmap

| **Phase** | **Focus**           | **Deliverables**                                                                                                                                                                                                         |
| --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase 1   | Content preparation | Verify summaries, dates, links, project status, contribution scope, and screenshots for all eleven projects                                                                                                              |
| Phase 2   | Foundation          | Keep Poppins, Montserrat, and JetBrains Mono; refine metadataBase, global design tokens, header, and footer                                                                                                              |
| Phase 3   | Content model       | Create types and data files for profile, generalized experience, eleven projects, technology groups, capabilities, education, and credentials                                                                            |
| Phase 4   | Main page           | Build hero/proof introduction, About, Education, generalized experience, three featured projects, eight supporting projects, Tech Stack, engineering capabilities, certifications, Medium articles, and contact sections |
| Phase 5   | Dynamic articles    | Implement the browser-side Medium feed adapter, cache, filtering, cards, and fallback states                                                                                                                             |
| Phase 6   | Case studies        | Create dynamic route, static params, metadata, and three detailed project pages                                                                                                                                          |
| Phase 7   | Visual refinement   | Screenshots, diagrams, responsive layout, one-accent design, motion wrappers                                                                                                                                             |
| Phase 8   | Quality             | Accessibility, SEO, performance, reduced motion, keyboard navigation                                                                                                                                                     |
| Phase 9   | Deployment          | Format, lint, build, verify out directory, deploy, test production routes                                                                                                                                                |

## 7.1 File-by-file build order

**1.** src/app/layout.tsx - global metadata defaults, metadataBase, title template, fonts, header, and footer shell.

**2.** src/app/globals.css - color tokens, typography, layout utilities, focus styles, selection, and reduced-motion handling.

**3.** src/types/portfolio.ts - content interfaces.

**4.** src/data/portfolio.ts - verified profile, experience, project, technology, capability, education, and credential data.

**5.** src/components/ui/\* - buttons, headings, tags, and small reveal wrapper.

**6.** src/components/layout/\* - header, mobile menu, and footer.

**7.** src/components/sections/\* - home-page sections in final order.

**8.** src/components/sections/MediumPostsFeed.tsx and src/lib/medium-feed.ts - runtime article fetch, validation, filtering, caching, and failure handling.

**9.** src/app/page.tsx - Server Component composition and home metadata.

**10.** src/components/projects/\* - cards, case-study layout, and gallery.

**11.** src/app/projects/\[slug\]/page.tsx - Server Component route, static params, and dynamic metadata.

**12.** public/\* - CV, screenshots, diagrams, favicon, and social preview images.

## 7.2 Minimum launch scope

- Complete the one-page portfolio using the section order defined in Section 3, with About and Education positioned near the top.

- Three featured project cards and all three complete case-study pages.

- Verified resume, GitHub, LinkedIn, Medium profile, email, repository, and demo links.

- Dynamic Latest Articles section that updates independently of GitHub Pages deployments.

- Responsive desktop, tablet, and mobile layouts.

- Page-specific metadata for every page.tsx route.

- No broken images, route-prefix errors, hydration warnings, or console errors.

## 7.3 Phase-two enhancements

- Add richer galleries, architecture diagrams, and contribution detail to the existing three case studies.

- Add project filtering or search only when it improves discovery across the full eleven-project inventory.

- Add technology-to-project cross-links so a visitor can see where each major technology was applied.

- Add automated link checking for repositories, demos, videos, credentials, and Medium article URLs.

- Keep the number of dedicated case-study pages fixed at three unless a future document version intentionally changes the information architecture.

# 8. Quality and launch checklist

## Content

- [ ] All project status labels and dates are accurate.

- [ ] Group-project contribution statements are specific and honest.

- [ ] Education, GPA, academic domains, A/L performance, and certifications match the CVs.

- [ ] About is the first full content section after the hero/proof introduction, with Education immediately after it.

- [ ] No hackathon, competition, award, or other achievement content appears in the portfolio.

- [ ] No research content appears in the portfolio.

- [ ] No volunteering information or lecturer references appear in the portfolio.

- [ ] No named ByteSquad Labs work project appears in the project gallery or case studies.

- [ ] All eleven approved projects appear: three featured projects and eight supporting projects.

- [ ] Exactly three dedicated project case-study routes are implemented.

- [ ] No confidential client or employer information is exposed.

- [ ] Lecturer names, contact details, and reference statements are not published.

- [ ] Every displayed technology is supported by current CV, internship, or project evidence.

- [ ] The Tech Stack is a distinct section and is not merged into About or Engineering Capabilities.

- [ ] Website typography uses Poppins for body/UI, Montserrat for headings, and JetBrains Mono only for technical metadata.

- [ ] The Medium section displays only software-engineering articles and excludes research or unrelated content.

- [ ] Article titles, dates, excerpts, images, and links are normalized consistently.

- [ ] Legacy-portfolio technologies are not copied without current relevance and evidence.

- [ ] Technology icons are local or package-based and do not depend on unreliable third-party image URLs.

## Accessibility and UX

- [ ] Semantic heading order and landmark elements are correct.

- [ ] Navigation, buttons, menus, cards, and galleries are keyboard accessible.

- [ ] Visible focus indicators meet contrast requirements.

- [ ] Images have meaningful alt text; decorative images use empty alt text.

- [ ] Motion is reduced or removed when prefers-reduced-motion is enabled.

- [ ] Content remains usable without animation.

## Technical and deployment

- [ ] All page.tsx files remain Server Components.

- [ ] Every page.tsx exports metadata or generateMetadata.

- [ ] Medium articles are fetched at runtime by a Client Component, not during the Next.js build.

- [ ] No Next.js API route, Route Handler, Server Action, or request-time Next.js server is required for the Medium feed.

- [ ] Publishing a new Medium article can update the portfolio feed without a GitHub Actions deployment.

- [ ] Feed loading, timeout, invalid-response, empty, offline, and provider-failure states are tested.

- [ ] Cached feed data expires and refreshes instead of remaining indefinitely stale.

- [ ] Every dynamic route is returned by generateStaticParams.

- [ ] npm run format:check passes.

- [ ] npm run lint passes.

- [ ] npm run build completes and creates the out directory.

- [ ] Home page, project routes, resume, images, and social assets work under the GitHub Pages base path.

- [ ] Production site is tested after deployment on desktop and mobile.

## Performance and SEO

- [ ] Client Components are limited to real interactions and motion wrappers.

- [ ] Screenshots are compressed and appropriately sized.

- [ ] Page title, description, canonical path, and Open Graph image are correct for each route.

- [ ] The main content is included in static HTML and does not depend on client-side fetching.

- [ ] No large video or animation blocks delay the first meaningful content.

# 9. Final content inventory

| **Priority** | **Item**                   | **Required content**                                                                                                                   |
| ------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Must         | Hero                       | Professional headline, summary, project and CV actions, social links                                                                   |
| Must         | About                      | First full content section after the hero/proof introduction; two-paragraph professional profile and working style                     |
| Must         | Education/Academics        | Early-page B.Sc. details, GPA, academic domains, A/L stream, Z-score, and grades                                                       |
| Must         | Experience                 | ByteSquad Labs role, period, stack, generalized responsibilities, and engineering practices; no named work-project showcase            |
| Must         | Featured projects          | ConstructPro ERP, Kochi Guru Pizza, FuelWise.lk                                                                                        |
| Must         | Tech Stack                 | Curated languages, frameworks, databases, mobile technologies, architecture, security, and delivery tools                              |
| Must         | Engineering capabilities   | API design, security, maintainability, debugging, collaboration, and deployment practices                                              |
| Must         | Medium articles            | Runtime-loaded latest software-engineering posts, safe excerpts, dates, images, and links                                              |
| Must         | Contact                    | Email, GitHub, LinkedIn, Medium profile                                                                                                |
| Must         | Metadata                   | Global defaults and page-specific metadata for every route                                                                             |
| Must         | Supporting projects        | BrewHub, Advertisement.lk, Multi-Role User Registration, FindYourMechanic.lk, Finance Tracker App, TaskMaster, HabitBuddy, and BookHub |
| Must         | Certifications             | Three relevant professional and technical certifications                                                                               |
| Should       | Case-study assets          | Screenshots and architecture diagrams                                                                                                  |
| Later        | Existing-page enrichment   | Better screenshots, diagrams, contribution notes, filters, and cross-links for the current eleven-project inventory                    |
| Later        | Dedicated articles archive | Optional separate route if the home-page feed becomes too large                                                                        |

# Final decision summary

> **Recommended implementation**
>
> Build one primary portfolio page with the hero/proof introduction followed immediately by About and Education, then Experience, Projects, Tech Stack, Engineering Capabilities, Certifications, dynamically updated Medium Articles, and Contact. Keep the current Poppins + Montserrat + JetBrains Mono typography system and restrained dark/blue visual language. Create dedicated pages only for the three strongest project case studies. Keep every page.tsx as a Server Component, export page-specific metadata, and isolate animation, the runtime Medium feed, and other browser interactivity in small Client Components.

## **Source basis**

The content inventory was derived from the two supplied CV versions and the configured Next.js project. The software-engineering-focused CV was used as the primary source where the versions differed. Education, GPA, academic domains, A/L performance, certifications, a dedicated Tech Stack, and dynamically loaded software-engineering Medium articles are included. Research projects, volunteering information, lecturer references, hackathons, competitions, awards, and other achievement content are excluded. The earlier basic portfolio ZIP was used to identify the complete non-work project inventory and available link types. The newer `my-portfolio_v3` skeleton is now treated as the implementation reference for the working visual system and component structure: dark Zinc surfaces, one blue accent, a 1200 px container, rounded cards, Poppins body text, Montserrat headings, JetBrains Mono technical labels, Server Component sections, and the existing App Router/static-export setup. The plan intentionally changes the skeleton's current content order by moving About and Education near the top because this produces a clearer profile for a fourth-year Software Engineering undergraduate.
