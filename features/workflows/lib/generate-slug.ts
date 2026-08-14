import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator"

/**
 * Generates a random hyphenated slug made from an adjective and an animal (e.g. "brave-otter").
 */
export function generateSlug() {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: "-",
    length: 2,
  })
}
