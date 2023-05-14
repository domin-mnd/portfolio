# How I implemented 3d models in my portfolio

In this guide I mention some basic aspects of [three.js](https://threejs.org/) along with some of the techniques I used while implementing 3d models in my portfolio.

> **Note**: This guide is not a tutorial on how to use three.js. It's more of a guide on how I used three.js in my portfolio.

> **Note**: The model used in this portfolio [isn't made/owned by me](https://sketchfab.com/sleepyjoshua)

## Table of contents

- [React implementation](#React-implementation)
  - [Gltfjsx](#Gltfjsx)
- [OrbitControls](#OrbitControls)
- [Conclusion](#Conclusion)

## React implementation

In this portfolio we didn't only use the raw three.js library but had it wrapped in [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), a react library that makes it easier to use three.js in react. Along with it we also used [@react-three/drei](https://drei.pmnd.rs/) for camera controls and other useful components (such as loading the model) & [gltfjsx](https://github.com/pmndrs/gltfjsx) for generating a react component out of gltf/glb model.

### Gltfjsx

Gltfjsx is a nice tool used to generate a react component out of a glTF/glb model. It is a command line tool that can be installed using npm. It takes a gltf/glb model as input and generates a react component out of it. As the result we've got a react component that we can use in our react app (see `src/components/pages/index/keyboard/component.tsx:41`). The generated component is a react component that uses the `useGLTF` hook from `@react-three/drei` to load the model.

In reality we don't only need to load the model, we also have to position it correctly, add lightning & make it interactable.

## OrbitControls

To load the model we have to pass it inside the canvas->mesh component with height property set (otherwise it will be 0px height). By providing some react components inside the canvas component we can add some lightning to the model. The mesh component also has a position & scale properties that we can use to manage the model:

```tsx
<ambientLight
  intensity={0.5} // Light from all directions
/>
<directionalLight
  position={[0, 5, 0]} // Light from the above
/>
<mesh scale={15} rotation={[Math.PI / 4, Math.PI / 12, 0]}>
  <Model />
</mesh>
```

Along with it we also add the OrbitControls component from `@react-three/drei` to make the model interactable:

```tsx
<mesh {...props}>
  <Model />
</mesh>
<OrbitControls
  minPolarAngle={Math.PI / 2}
  maxPolarAngle={0}
  enableZoom={false}
  enablePan={false}
  autoRotate
  autoRotateSpeed={1}
/>
```

With the provided properties we:
- Don't allow the camera to look down
- Don't allow the camera to look up (make it look straight)
- Don't allow the camera to zoom
- Don't allow the camera to pan
- Make the model rotate automatically

But as you can see the model doesn't rotate around the entire axis. To add the same effect we're using the `useFrame` hook from `@react-three/fiber` to rotate the model around the y axis by checking the angle value:

```tsx
// Make a keyboard rotate left & right depending on the angle of the camera
useFrame(() => {
  const azimuthalAngle = orbitRef.current.getAzimuthalAngle();
  if (azimuthalAngle > 0.5) {
    orbitRef.current.autoRotateSpeed = 1;
  } else if (azimuthalAngle < -0.5) {
    orbitRef.current.autoRotateSpeed = -1;
  }
});
```

As you can see we used some ref magic to get the orbit controls component. We also used the `getAzimuthalAngle` method to get the angle of the camera. If the angle is greater than 0.5 we make the model rotate to the right, if it's less than -0.5 we make the model rotate to the left.

## Conclusion

And as the conclusion I can say that three.js is a great 3d library. In reality this was the first time trigonometry was useful for me. I hope this guide was helpful for you. If you have any questions feel free to open an issue.