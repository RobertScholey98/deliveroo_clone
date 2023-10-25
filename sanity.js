import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'qksgk4q9',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: 'skdTFOA1T8E51csrdMujcK10bUWm66M6Bs20kvlpDGKpEC2KwhiOKhN6ewuWGzvBm4TWoyMM1OBk5pqvdBZTwjYvKUXNHLiPjcZ9ZBgXu0p8J9tL3GCqIxD9KUoV45TAmDzusePHxOlh9EW0EYB8WOeK0GnKgZpLYCePKQ2JGMaGDpXG0hYC',
    useCdn: true,
})
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);