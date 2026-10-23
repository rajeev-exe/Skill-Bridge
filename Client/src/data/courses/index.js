// src/data/courses/index.js
//
// VERIFICATION RULE — read before adding entries to any file in this folder:
// Every course object must correspond to a playlist/video URL that has been
// opened and confirmed to exist (title, instructor, and rough length match).
// Never hand-type an entry from memory. Files with no verified entries yet
// are left as empty arrays rather than filled with guesses — an empty file
// is honest; a fabricated URL breaks user trust the first time they click it.

import { dsaCourses } from "./dsa";
import { javaCourses } from "./java";
import { pythonCourses } from "./python";
import { webDevelopmentCourses } from "./webDevelopment";
import { systemDesignCourses } from "./systemDesign";
import { devopsCourses } from "./devops";
import { aiMlCourses } from "./aiMl";
import { aptitudeCourses } from "./aptitude";
import { interviewCourses } from "./interview";

export const allCourses = [
  
  ...interviewCourses,
  ...javaCourses,
  ...pythonCourses,
  ...webDevelopmentCourses,
  ...systemDesignCourses,
  ...devopsCourses,
  ...aiMlCourses,
  ...aptitudeCourses,
  ...dsaCourses,
  
];

export {
  dsaCourses,
  javaCourses,
  pythonCourses,
  webDevelopmentCourses,
  systemDesignCourses,
  devopsCourses,
  aiMlCourses,
  aptitudeCourses,
  interviewCourses,
};

export const getCoursesByCategory = (category) =>
  allCourses.filter((course) => course.category === category);

export const getCourseById = (id) => allCourses.find((course) => course.id === id);