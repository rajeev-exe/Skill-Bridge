# -*- coding: utf-8 -*-
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, HRFlowable
from reportlab.lib import colors

NAME_COLOR = colors.HexColor("#1F3864")
ACCENT = colors.HexColor("#2E5B8A")
DARK = colors.HexColor("#222222")
CATCOLOR = colors.HexColor("#9C4A00")
QCOLOR = colors.HexColor("#1F3864")
ACOLOR = colors.HexColor("#333333")

styles = getSampleStyleSheet()

title_style = ParagraphStyle("TitleX", parent=styles["Title"], fontName="Helvetica-Bold",
                              fontSize=22, textColor=NAME_COLOR, alignment=TA_CENTER, spaceAfter=4)
subtitle_style = ParagraphStyle("SubtitleX", parent=styles["Normal"], fontName="Helvetica-Oblique",
                                 fontSize=11, textColor=colors.HexColor("#555555"), alignment=TA_CENTER, spaceAfter=14)
qcat_style = ParagraphStyle("QCatX", parent=styles["Heading3"], fontName="Helvetica-Bold",
                             fontSize=11.5, textColor=CATCOLOR, spaceBefore=16, spaceAfter=6)
q_style = ParagraphStyle("QX", parent=styles["Normal"], fontName="Helvetica-Bold",
                          fontSize=10.3, textColor=QCOLOR, spaceBefore=6, spaceAfter=2, leading=13)
a_style = ParagraphStyle("AX", parent=styles["Normal"], fontName="Helvetica",
                          fontSize=10.1, textColor=ACOLOR, spaceAfter=6, leading=13.5, leftIndent=10)
body_style = ParagraphStyle("BodyX", parent=styles["Normal"], fontName="Helvetica",
                             fontSize=10.5, textColor=DARK, spaceAfter=8, leading=14)


def hr():
    return HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=8)


story = []
story.append(Paragraph("Additional Interview Questions", title_style))
story.append(Paragraph("Jeyashree K S &nbsp;|&nbsp; Beyond the Core 100 &mdash; General, HR, Technical &amp; AI Awareness", subtitle_style))
story.append(Paragraph(
    "These are additional questions that commonly come up in campus/AI-ML interviews but aren't tied "
    "directly to a specific resume line &mdash; general HR questions, questions to ask the interviewer, "
    "current GenAI/LLM awareness, practical Python/SQL, basic ML system design, and common aptitude-style "
    "puzzles. Numbering continues from 101 so this can be used alongside the main 100-question kit.",
    body_style))
story.append(hr())

QA = []

# ---------------- K. General HR / Behavioral not yet covered (101-112) ----------------
QA.append(("K. General HR &amp; Behavioral (101-112)", [
("What are your greatest strengths?",
 "Analytical thinking and follow-through &mdash; when I take on a project like my Intrusion Detection "
 "System, I break it into stages, research the right approach for each, and see it through to a working, "
 "evaluated result rather than stopping at a rough prototype."),
("What is your biggest weakness?",
 "I sometimes spend longer than necessary polishing a piece of work before moving on &mdash; for example, "
 "refining the SMOTE and feature-engineering steps in my IDS project. I've been working on setting myself "
 "time boxes so I know when 'good enough' is genuinely good enough to move forward."),
("Why should we hire you?",
 "I bring a combination that's hard to find together: hands-on ML project experience with real evaluation "
 "rigor, strong Java/OOP fundamentals from two internships, and solid core CS knowledge. I learn fast, I've "
 "already shown I can take a project from raw data to a working, measured model, and I'm genuinely motivated "
 "to grow into systems-level AI engineering."),
("Tell me about a time you showed leadership.",
 "While building FitFlirt, I effectively led my own project end-to-end &mdash; setting the architecture, "
 "prioritizing which features (trainer archetypes vs. streak logic) to build first, and deciding how to "
 "handle the ethical BMI validation responsibly, then presenting the finished work at PECTEAM 2K25."),
("Tell me about a conflict you had with a teammate or manager and how you resolved it.",
 "During my Nava Netlinks internship, I initially interpreted a UML diagram differently from how a senior "
 "engineer intended. Instead of assuming I was right, I asked for a quick walkthrough of their reasoning, "
 "adjusted my implementation to match, and made a habit of confirming ambiguous diagrams before coding after "
 "that."),
("Describe your ideal work environment.",
 "One that's research-driven and collaborative, where I can dig deep into hard problems, get honest "
 "technical feedback, and learn from engineers more experienced than me &mdash; similar to how my "
 "internships were structured under senior engineer guidance."),
("How do you handle working under pressure or tight deadlines?",
 "I break the remaining work into the smallest concrete tasks, tackle the highest-risk or most "
 "time-consuming piece first, and communicate early if something looks at risk, rather than waiting until "
 "the deadline to raise a concern."),
("Are you willing to relocate / work in a specific location?",
 "Yes, I'm open to relocating for the right opportunity."),
("What are your salary expectations?",
 "I'm early in my career and more focused on finding the right learning environment and role fit. I'm open "
 "to discussing compensation in line with the standard range for this role and my experience level."),
("Do you have any other offers or interviews in progress?",
 "[Answer honestly based on your actual situation \u2014 interviewers value transparency here more than a "
 "'perfect' answer.]"),
("Why do you want to work at our company specifically?",
 "[Customize per company: research their products, recent news, and mission, and connect it to your "
 "interest in AI/ML infrastructure or cybersecurity \u2014 e.g., 'I'm drawn to your work on X because it "
 "aligns with my interest in Y from my IDS project.']"),
("Is there anything else you'd like us to know about you?",
 "Just that I'm someone who genuinely enjoys the process of building and evaluating things properly, not "
 "just getting them to 'work once' &mdash; and I'm excited about the chance to grow that into "
 "production-level AI engineering."),
]))

# ---------------- L. Questions to Ask the Interviewer (113-118) ----------------
QA.append(("L. Smart Questions to Ask the Interviewer (113-118)", [
("What does success look like for someone in this role in the first 6 months?",
 "Asking this shows you're thinking about impact and gives you a concrete bar to aim for if you join."),
("What does the team's day-to-day workflow look like \u2014 how much is research vs. implementation vs. review?",
 "Useful for understanding the actual balance of work, especially for a role spanning ML and systems."),
("What tools, frameworks, or infrastructure does the team rely on most heavily?",
 "Signals genuine interest in the technical stack (e.g., CUDA, compiler frameworks) and helps you gauge the "
 "ramp-up you'd need."),
("How does the team approach mentorship or onboarding for someone earlier in their career?",
 "Relevant for you specifically, since both your internships were guided by senior engineers and you value "
 "that structure."),
("What's a technical challenge the team is currently working through?",
 "Shows curiosity about real problems, not just the role description, and can spark a deeper conversation."),
("What do you personally enjoy most about working here?",
 "A good closing question &mdash; personal, low-pressure, and often reveals genuine culture information."),
]))

# ---------------- M. Modern AI / GenAI & LLM Awareness (119-132) ----------------
QA.append(("M. Modern AI, GenAI &amp; LLM Awareness (119-132)", [
("What is a Large Language Model (LLM), at a high level?",
 "An LLM is a neural network, typically based on the Transformer architecture, trained on massive amounts "
 "of text to predict the next token in a sequence. That simple training objective, at large scale, lets it "
 "generate coherent text, answer questions, and perform many language tasks."),
("What is the Transformer architecture, and why did it replace RNNs for most NLP tasks?",
 "The Transformer uses a self-attention mechanism to let every token in a sequence directly attend to every "
 "other token, rather than processing sequentially like an RNN. This makes it far more parallelizable to "
 "train and better at capturing long-range dependencies in text."),
("What is 'attention' in the context of neural networks?",
 "Attention is a mechanism that lets a model weigh how relevant each part of the input is to the part it's "
 "currently processing, rather than treating all input equally &mdash; so the model can focus on the most "
 "relevant words or tokens for a given prediction."),
("What is fine-tuning, and how is it different from training a model from scratch?",
 "Fine-tuning takes an already pre-trained model and continues training it on a smaller, task-specific "
 "dataset to adapt it to a narrower use case, which is far cheaper and faster than training a model from "
 "scratch since the model already has general language/pattern understanding."),
("What is RAG (Retrieval-Augmented Generation)?",
 "RAG combines a language model with an external retrieval system &mdash; when answering a query, relevant "
 "documents are first retrieved from a knowledge base and passed to the model as context, so the model can "
 "ground its answer in up-to-date or domain-specific information it wasn't necessarily trained on."),
("What is a 'hallucination' in the context of LLMs, and why does it happen?",
 "A hallucination is when a model generates confident-sounding but false or unsupported information. It "
 "happens because the model is fundamentally predicting plausible next tokens based on patterns, not "
 "verifying facts against a ground truth, especially when it lacks relevant training data or grounding "
 "context."),
("What is prompt engineering?",
 "It's the practice of carefully designing the input/instructions given to a language model &mdash; wording, "
 "examples, structure &mdash; to reliably get the desired kind of output, without changing the model's "
 "underlying weights."),
("What's the difference between a parameter and a hyperparameter in ML?",
 "Parameters (like weights) are learned automatically by the model during training. Hyperparameters (like "
 "learning rate, tree depth, or number of estimators) are set beforehand by the practitioner and control how "
 "the training process itself behaves."),
("What is gradient descent, at a high level?",
 "It's an optimization algorithm that iteratively adjusts a model's parameters in the direction that most "
 "reduces the loss (error), using the gradient of the loss function, until it converges on parameters that "
 "minimize error."),
("What is the difference between a CPU and a GPU, and why are GPUs preferred for ML training?",
 "A CPU has few powerful cores optimized for sequential, general-purpose tasks. A GPU has thousands of "
 "simpler cores optimized for doing many operations in parallel, which matches the highly parallel matrix "
 "and vector operations that dominate neural network training, making GPUs far faster for that workload."),
("What is CUDA, in simple terms?",
 "CUDA is NVIDIA's parallel-computing platform and programming model that lets developers write code that "
 "runs directly on the GPU, which is how most deep learning frameworks accelerate training and inference on "
 "NVIDIA hardware."),
("What ethical concerns exist around AI systems, and how would you think about them as an engineer?",
 "Key concerns include bias in training data leading to unfair outcomes, privacy issues with data used to "
 "train models, and the risk of models being used to spread misinformation or cause harm. As an engineer, I'd "
 "focus on things within my control: evaluating models on more than just aggregate accuracy, being "
 "transparent about limitations, and building in safeguards like the ethical validation logic I added to "
 "FitFlirt."),
("What's the difference between AI, Machine Learning, and Deep Learning?",
 "AI is the broad field of building systems that perform tasks requiring intelligence. Machine Learning is "
 "a subset of AI where systems learn patterns from data rather than being explicitly programmed. Deep "
 "Learning is a subset of ML that uses multi-layered neural networks, particularly effective for unstructured "
 "data like images, audio, and text."),
("Have you used or experimented with any GenAI tools (ChatGPT, GitHub Copilot, etc.)? How?",
 "[Answer honestly based on your own experience \u2014 e.g., using an AI coding assistant to speed up "
 "boilerplate while building FitFlirt, or using it to research approaches for the IDS project, while still "
 "verifying and understanding the output yourself.]"),
]))

# ---------------- N. Practical Python & SQL (133-142) ----------------
QA.append(("N. Practical Python &amp; SQL (133-142)", [
("What's the difference between a list, tuple, and dictionary in Python?",
 "A list is ordered and mutable. A tuple is ordered but immutable, so it's useful for fixed collections of "
 "values. A dictionary stores key-value pairs and allows fast lookups by key rather than position."),
("What are Python list comprehensions, and why use them?",
 "They're a concise way to build a list in a single readable line, e.g., [x**2 for x in range(10)], instead "
 "of writing a full for-loop with .append() calls &mdash; often faster and more Pythonic."),
("What's the difference between a shallow copy and a deep copy in Python?",
 "A shallow copy creates a new object but still references the same nested objects inside it, so changes to "
 "a nested object affect both copies. A deep copy recursively copies every nested object too, so the two "
 "copies are fully independent."),
("What are Python decorators, in simple terms?",
 "A decorator is a function that wraps another function to add behavior (like logging or timing) before or "
 "after it runs, without modifying the original function's code."),
("How would you read a large CSV file efficiently in Python?",
 "I'd use pandas' read_csv with chunksize to process it in batches instead of loading the whole file into "
 "memory at once, or specify dtypes upfront to reduce memory usage."),
("Write a SQL query to find the second-highest salary in an Employees table.",
 "SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees); \u2014 this finds "
 "the highest salary that's still less than the overall maximum, which is the second-highest."),
("Write a SQL query to find duplicate rows in a table based on a column.",
 "SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1; \u2014 grouping by "
 "the column and filtering groups with more than one row identifies duplicates."),
("What's the difference between WHERE and HAVING in SQL?",
 "WHERE filters individual rows before any grouping happens. HAVING filters groups after a GROUP BY "
 "aggregation, since aggregate functions like COUNT() or SUM() can't be used in a WHERE clause."),
("What is a subquery, and when would you use one?",
 "A subquery is a query nested inside another query, used when you need the result of one query as input to "
 "another &mdash; for example, filtering rows based on an aggregate calculated separately, like finding the "
 "second-highest salary above."),
("How would you find and remove duplicate rows in a pandas DataFrame?",
 "I'd use df.duplicated() to identify duplicate rows and df.drop_duplicates() to remove them, optionally "
 "specifying a subset of columns to check and which occurrence (first/last) to keep."),
]))

# ---------------- O. Basic ML System Design & Deployment (143-150) ----------------
QA.append(("O. Basic ML System Design &amp; Deployment (143-150)", [
("How would you design a simple end-to-end ML pipeline for a new classification problem?",
 "I'd start with data collection and cleaning, then exploratory analysis and feature engineering, split the "
 "data into train/validation/test sets, train and compare a few candidate models, evaluate with appropriate "
 "metrics, then package the best model for inference \u2014 similar to the process I followed in my IDS "
 "project, just extended with a deployment step."),
("What is model drift, and how would you detect it in production?",
 "Model drift happens when the statistical properties of incoming data change over time, so a model's "
 "performance degrades even though it wasn't retrained incorrectly. I'd detect it by monitoring key input "
 "feature distributions and prediction confidence over time, and tracking live performance metrics against a "
 "baseline where labels are available."),
("How would you monitor a deployed ML model?",
 "I'd track prediction latency and volume, input data distribution drift, and where possible, real-world "
 "outcome metrics (like false positive/negative rates) using periodically labeled samples, with alerting if "
 "any metric crosses a threshold."),
("What's the difference between batch inference and real-time inference?",
 "Batch inference processes large volumes of data on a schedule (e.g., nightly), which is efficient but not "
 "immediate. Real-time inference responds to individual requests as they come in, with low latency, which is "
 "needed for use cases like live intrusion detection or fraud detection."),
("How would you version and reproduce ML experiments?",
 "I'd track the exact dataset version, code version (via git), hyperparameters, and random seeds used for "
 "each experiment, ideally using a tool like MLflow or DVC, so any result can be reproduced or compared "
 "later."),
("What's the difference between horizontal and vertical scaling, and which matters more for ML inference?",
 "Vertical scaling means adding more power (CPU/GPU/memory) to a single machine; horizontal scaling means "
 "adding more machines and distributing load across them. For ML inference at scale, horizontal scaling "
 "behind a load balancer is usually preferred for reliability and elasticity, though GPU-bound workloads "
 "often also benefit from vertical scaling per node."),
("How would you reduce the latency of a deployed model?",
 "Options include model compression techniques like quantization or pruning, using a smaller distilled "
 "model, batching requests where possible, and using hardware acceleration (GPU/optimized runtimes) suited "
 "to the model type."),
("How would you A/B test a new model version against the current production model?",
 "I'd route a portion of live traffic to the new model while the rest continues on the current model, keep "
 "the split randomized and consistent per user/session, and compare key business or performance metrics "
 "between the two groups over a fixed period before deciding whether to roll out fully."),
]))

# ---------------- P. Common Aptitude / Logical Puzzles (151-158) ----------------
QA.append(("P. Common Aptitude &amp; Logical Puzzles (151-158)", [
("You have two ropes, each takes exactly 60 minutes to burn but burns unevenly. How do you measure 45 minutes?",
 "Light one rope at both ends and the second rope at one end, simultaneously. The first rope fully burns in "
 "30 minutes (since both ends burning meet in half the total time). At that moment, light the second rope's "
 "other end too &mdash; it has 30 minutes of unburned rope left, but now burning from both ends, it finishes "
 "in 15 more minutes. Total: 30 + 15 = 45 minutes."),
("You have 9 identical-looking balls, one is heavier than the rest. Using a balance scale only twice, find the heavier ball.",
 "Divide the 9 balls into 3 groups of 3. Weigh two groups against each other: if balanced, the heavier ball "
 "is in the third group; if not, it's in the heavier group. Take that group of 3 and weigh any two of its "
 "balls against each other: if balanced, the third is the heavy one; if not, the heavier side has it."),
("A bat and a ball together cost $1.10. The bat costs $1.00 more than the ball. How much does the ball cost?",
 "$0.05. If the ball costs x, the bat costs x + 1.00, and x + (x + 1.00) = 1.10, so 2x = 0.10, giving x = "
 "0.05."),
("How many times do a clock's hour and minute hands overlap in a 12-hour period?",
 "11 times. The minute hand gains on the hour hand and laps it 11 times every 12 hours (not 12, because the "
 "first and last overlaps coincide at 12:00)."),
("If a train leaves City A at 60 km/h and another leaves City B (300 km away) at 40 km/h toward each other, when do they meet?",
 "Their combined closing speed is 60 + 40 = 100 km/h. Time to meet = distance / combined speed = 300 / 100 = "
 "3 hours."),
("You're given a 3-litre jug and a 5-litre jug. How do you measure exactly 4 litres?",
 "Fill the 5L jug fully, pour it into the 3L jug (leaving 2L in the 5L jug). Empty the 3L jug, pour the "
 "remaining 2L into it. Fill the 5L jug again fully, then pour into the 3L jug (which has 2L, needs 1L more) "
 "until it's full &mdash; leaving exactly 4L in the 5L jug."),
("Why are manhole covers round?",
 "A round cover can never fall through its own hole no matter how it's tilted, since a circle's diameter is "
 "constant in every direction &mdash; unlike a square or rectangular cover, which can fall through diagonally."),
("Estimate: how many piano tuners are there in a city of 1 million people? (Fermi estimation)",
 "This tests estimation, not exact recall: assume ~1 in 3 households has a piano tuned roughly once a year, "
 "households average ~4 people, a tuner can service ~4 pianos a day and works ~250 days a year (~1000 "
 "tunings/year). 1,000,000 people / 4 per household \u2248 250,000 households; /3 \u2248 83,000 pianos tuned "
 "yearly; /1000 tunings per tuner per year \u2248 roughly 80-85 piano tuners. The exact number matters less "
 "than showing clear, reasonable step-by-step logic."),
]))

# ---------------- Q. Portfolio / GitHub / LinkedIn (159-160) ----------------
QA.append(("Q. Portfolio, GitHub &amp; Online Presence (159-160)", [
("Walk me through your GitHub profile \u2014 what should we look at?",
 "I'd point them to the repositories for my Intrusion Detection System and FitFlirt, highlighting clean "
 "commit history, a clear README explaining the problem and approach, and organized code structure that "
 "reflects the OOP principles and ML workflow I followed."),
("Is your code documented and easy for someone else to pick up?",
 "Yes &mdash; I write README files explaining setup and usage, comment non-obvious logic (like the BMI "
 "validation rules or feature-engineering steps), and try to name variables and functions descriptively so "
 "the code is self-explanatory wherever possible."),
]))

for cat_title, pairs in QA:
    story.append(Paragraph(cat_title, qcat_style))
    for q, a in pairs:
        story.append(Paragraph(q, q_style))
        story.append(Paragraph(a, a_style))

doc = SimpleDocTemplate(
    "/mnt/user-data/outputs/Jeyashree_KS_Additional_Interview_Questions.pdf",
    pagesize=letter,
    topMargin=0.55 * inch, bottomMargin=0.55 * inch,
    leftMargin=0.65 * inch, rightMargin=0.65 * inch,
)
doc.build(story)
print("done")