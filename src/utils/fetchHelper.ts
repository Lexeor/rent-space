import { mockMenuItems } from "./mock-data";
import { urlGetMenuItems } from "./apiUrls";

async function getMenuItems(isReal = true) {
  if (isReal) {
    const response = await fetch(urlGetMenuItems, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("error");
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } else {
    return mockMenuItems;
  }
}

export { getMenuItems };
