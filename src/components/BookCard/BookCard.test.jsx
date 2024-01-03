import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookCard from "./BookCard";
import { expect } from "vitest";

describe("BookCard Component", () => {
  it("should render a title based on props", () => {
    render(
      <BookCard
        key="1"
        index="1"
        data={{
          title: "testBook",
          author: "testAuthor",
          releaseDate: "2019-03-29",
        }}
      />
    );
    const title = screen.getByText("testBook");
    expect(title).toBeVisible();
  });

  it("should render 'Not available' if there is no release date", () => {
    render(
      <BookCard
        key="1"
        index="1"
        data={{
          title: "testBook",
          author: "testAuthor",
        }}
      />
    );
    const releaseDate = screen.getByText("Not available");
    expect(releaseDate).toBeVisible();
  });
});
