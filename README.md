

# Trouble shooting


## Error: default is not exported by node_modules/cannon/build/cannon.js, imported by src/index.ts

After using `import cannon from 'cannon'` it shows default is not exported by...


https://forum.babylonjs.com/t/cannon-including-problem/2287

you should use require('cannon')


## Rollup creates undefined variable
https://github.com/rollup/rollup/issues/759
