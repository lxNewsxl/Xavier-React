
# Xavier Framework

Xavier is a new framework for reading .xavier files and generating pure Javascript modules for the rendering of components on a variety of different platforms. Xavier reads everything between x{ and }x as valid C# and everything between {{ and }} as valid Javascript, which it then compiles into a single output module. This allows developers to use C# to describe the objects while outputting JavaScript code to render the components.

## Getting Started

To get started with Xavier, simply install the Devmachinist.Xavier >1.0.2 and Devmachinst.Xavier.AOT >1.0.1 Nuget packages in your preferred environment. After installation, you will be able to create a file ending in the extension '.xavier', which you can then read using the framework.
The file requires a code behind as a model in the form of .xavier.cs. The class must inherit from XavierNode and match the name of the file.

## Usage

Once the file is created, you can read the .xavier file. This will compile the C# and Javascript into a single output module that can be used for the rendering of components. To render the components, you'll need to pass the output module to your application or platform's rendering library.

## This repository
This project is an example of how to render components on a .Net core React app using Xavier:

```cs
     // Adding these lines will initialize the AOT worker to rebuild
     // the module when the length of the file changes


        //The Root tells your app to search for .xavier files with their .xavier.cs code behind
        Variables.Root = Environment.CurrentDirectory;

        //The Destination is relative to the Evironment.CurrentDirectory. The final 
        Variables.Destination = "/ClientApp/Public/Xavier";

        //After you set your static variables for the AOT Compiler 
        builder.Services.AddHostedService<XAOT>();



        //Xavier is built on .Net core for cross-platform use and is only available on .Net 7 and beyond

```

### `npm run css:build`

Builds the tailwind css in this project


Have fun...
I hope it brings you as much joy as it brought me building it!
