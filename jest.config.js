export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "jest-transform-stub",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
        // Add additional ts-jest configurations here if needed
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
