# Get Start
https://doc.babylonjs.com/resources/offsite_tutorials_list
https://doc.babylonjs.com/babylon101/
https://doc.babylonjs.com/how_to/

# Trouble shooting


## Error: default is not exported by node_modules/cannon/build/cannon.js, imported by src/index.ts

After using `import cannon from 'cannon'` it shows default is not exported by...


https://forum.babylonjs.com/t/cannon-including-problem/2287

you should use  `import * as CANNON from 'cannon'`


## Rollup creates undefined variable
https://github.com/rollup/rollup/issues/759


## types
tsconfig.json 中还可以在types 中再指定额外的 d.ts 目录， 默认在node_modules下寻找