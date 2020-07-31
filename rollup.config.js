import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";


export default {
    input: "src/componentsReact/index.ts",
    output: [
        {
            file: "dist/react/index.js",
            format: "cjs",
            sourcemap: true
        },
        {
            file: "dist/react/index.esm.js",
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.react.json',
            useTsconfigDeclarationDir: false
        }),
        copy({
            targets: [
                {
                    src: "dist/sxa-umbrella-webcomponents/sxa-umbrella-webcomponents.css",
                    dest: "dist/react",
                    rename: "index.css"
                },
                {
                    src: "src/componentsReact/package.json",
                    dest: "dist/react",
                    rename: "package.json"
                }
            ]
        })
    ]
};
