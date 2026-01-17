import { test, expect } from "@playwright/test";

test.describe("Site smoke tests", () => {
  test("home page loads", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Mark Darabos" })
    ).toBeVisible();
  });

  test("projects page loads", async ({ page }) => {
    await page.goto("/projects");
    await expect(
      page.getByRole("heading", { name: "Selected Work" })
    ).toBeVisible();
    await expect(page.getByText("Modern Booker App")).toBeVisible();
  });

  test("snippets page loads", async ({ page }) => {
    await page.goto("/snippets");
    await expect(
      page.getByRole("heading", { name: "Snippets & Patterns" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "React Hooks" })
    ).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("menu links return to section anchors", async ({ page }) => {
    await page.goto("/projects");
    await page.getByRole("link", { name: "Skills" }).click();
    await expect(page).toHaveURL(/\/#skills$/);
    await expect(page.locator("#skills")).toBeVisible();
  });
});

test.describe("Snippets interactions", () => {
  test("category switch shows utilities snippets", async ({ page }) => {
    await page.goto("/snippets");
    await page.getByRole("button", { name: "Utilities" }).click();
    await expect(
      page.getByRole("heading", { name: "Utilities" })
    ).toBeVisible();
    await expect(
      page.getByText("Fetch wrapper with retries")
    ).toBeVisible();
  });

  test("converters category shows unit converter", async ({ page }) => {
    await page.goto("/snippets");
    await page.getByRole("button", { name: "Converters & Calculators" }).click();
    await expect(
      page.getByRole("heading", { name: "Converters & Calculators" })
    ).toBeVisible();
    await expect(
      page.getByText("Unit Converter (length, weight, temperature)")
    ).toBeVisible();
    await expect(page.getByText("convertLength")).toBeVisible();
  });
});
