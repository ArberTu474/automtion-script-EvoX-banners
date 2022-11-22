### An automation script for genrating `svg` & `png` release banners for Evolution X telegram channels.

## Requirements
- Node js

## Setting up `devices.json` file
This file is used to generate the benners

- The structre of `devices.json` file
```
{
  "devices": [
    {
      "codename": "codename",
      "device_name": "Device Name",
      "device_type": 1,     ---->See below all "device_type" numbers<---- 
      "maintainer": "Maintainer"
    }
  ]
}
```

## All `device_type` numbers 

![Artboard 65](https://user-images.githubusercontent.com/88089607/202863338-1a50ab38-1873-46df-94fb-1ef3bb349515.png)

## Run script
```
npm install
```
```
npm run start
```
## Output
- `.svg` files are exported in `./files`
- `.png` files are exported in `./exported_png`

## Preview
![1234 copy](https://user-images.githubusercontent.com/88089607/203360861-1621f83a-9f74-4cf0-b510-028170947e68.png)
