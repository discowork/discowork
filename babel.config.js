module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
   [
     "module-resolver",
     {
       alias: {
         "@discowork/core": "./src/Core",
         "@discowork/interfaces": "./src/Core/Interfaces",
         "@discowork/helpers": "./src/Core/Helpers",
         "@/repositories": "./src/Repositories"
       }
     }
   ]
 ],
  ignore: ["**/*.spec.ts"]
};
