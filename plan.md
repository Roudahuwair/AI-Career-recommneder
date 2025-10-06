# MajorMatch – Project Plan

## Vision
Build a simple tool that helps students discover suitable university majors through a short quiz and clear recommendations.

## MVP Scope
- One-page website (HTML/CSS/JS)
- 10 multiple-choice questions
- “Get Result” button
- Result: top 3 majors with brief descriptions

## Quiz Design
1. Which activity sounds most fun?  
   A) Coding, B) Designing, C) Solving problems, D) Planning a business, E) Helping people  
2. You prefer tasks that are…  
   A) Analytical, B) Creative, C) Practical, D) People-focused, E) Strategic  
3. You feel confident in…  
   A) Math, B) Art, C) Building things, D) Communication, E) Business logic  

Majors: AI/CS, Data Science, Engineering, Business, Marketing, Design/UX, Psychology, Health.

## Scoring Logic
Each answer gives points to related majors.

```js
const majors = { AI:0, Data:0, Eng:0, Biz:0, Mkt:0, Design:0, Psych:0, Health:0 };
// Example scoring
// majors.AI += 2; majors.Eng += 1; etc.
// Sort scores and show top 3

## Major Descriptions
- **AI/CS:** Build smart systems and software.  
- **Data Science:** Analyze and interpret data.  
- **Engineering:** Design and optimize systems.  
- **Business:** Plan and manage projects.  
- **Marketing:** Create campaigns and strategies.  
- **Design/UX:** Make products look and feel great.  
- **Psychology:** Understand people’s behavior.  
- **Health:** Care for others and improve well-being.

## Roadmap
1. Static quiz (current step)  
2. Save/share results  
3. Add AI-based recommendations  
4. Visual design updates
