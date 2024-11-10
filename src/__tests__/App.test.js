import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm Suudi Abdisalan`", () => {
    render(<App />);
  
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    expect(topLevelHeading).toBeInTheDocument();
  });
  
  test("displays an image of yourself", () => {
    render(<App />);
  
    const image = screen.getByAltText("My profile pic");
  
    expect(image).toHaveAttribute("src", "https://scontent.xx.fbcdn.net/v/t1.15752-9/462560810_1204940330615301_3538077835404816867_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=100&cb=04374bf5-a6759482&ccb=1-7&_nc_sid=0024fc&_nc_ohc=x7CXNRK8dyMQ7kNvgHEZOqQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGt9K3eOBQV59c4aw-u6WF796eEymi9NPtgnZeF95tl0g&oe=67582209");
  });
  
  test("displays second-level heading with the text `About Me`", () => {
    render(<App />);
  
    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    expect(secondLevelHeading).toBeInTheDocument();
  });
  
  test("displays a paragraph for your biography", () => {
    render(<App />);
  
    const bio = screen.getByText(/I am current/i);
  
    expect(bio).toBeInTheDocument();
  });
  
  test("displays the correct links", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", {
      name: /GitHub/i,
    });
    // const linkedinLink = screen.getByRole("link", {
    //   name: /linkedin/i,
    // });
  
    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com/Suudi-sudo")
    );
  
    // expect(linkedinLink).toHaveAttribute(
    //   "href",
    //   expect.stringContaining("https://linkedin.com")
    // );
  });