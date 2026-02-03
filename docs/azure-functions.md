# Azure Functions: Core Concepts and Architecture

## Introduction

Azure Functions is Microsoft's serverless compute service that allows you to run small pieces of code (functions) in the cloud without provisioning or managing servers. It's designed for event-driven applications, automatically scaling based on demand. Functions can be written in multiple languages, including JavaScript/Node.js.

## Key Concepts

### 1. Functions
- Small, focused units of code that perform a specific task.
- Each function is triggered by an event and can have input/output bindings.
- Example: A function that processes uploaded files or sends emails.

### 2. Triggers
Triggers define how a function is invoked. Common types:
- **HTTP Trigger**: Responds to HTTP requests (e.g., REST APIs).
- **Timer Trigger**: Runs on a schedule (cron-like).
- **Queue Trigger**: Activates when a message is added to an Azure Queue.
- **Blob Trigger**: Fires on blob storage events (upload/delete).
- **Event Grid/Event Hub Triggers**: For custom or high-volume events.

### 3. Bindings
Bindings provide declarative connections to Azure services or external resources:
- **Input Bindings**: Read data from services (e.g., Cosmos DB, Blob Storage).
- **Output Bindings**: Write data to services (e.g., send to Queue, update Table Storage).
- Benefits: Reduces boilerplate code; handles serialization automatically.

### 4. Runtime
The execution environment for functions:
- Supports languages: JavaScript, C#, Python, Java, PowerShell, etc.
- Current version: **v4** (released 2022), with support for .NET 6+, Node.js 14+, Python 3.7+.
- Features: Improved performance, security, and cross-platform compatibility.

## Architecture Overview

### Event-Driven Model
- Functions are reactive: They respond to events rather than running continuously.
- Stateless by default: Each invocation is independent.
- For stateful workflows, use **Durable Functions** (extension for orchestrating complex processes).

### Scaling
- **Automatic Scaling**: Scales out with load; scales to zero when idle (no cost).
- **Consumption Plan**: Pay only for execution time (most cost-effective for variable loads).
- **Premium Plan**: Faster cold starts, VNET support, pre-warmed instances.
- **Dedicated Plan**: Runs on App Service plans for predictable scaling.

### Hosting and Deployment
- Deploy via Azure Portal, CLI, VS Code, or CI/CD pipelines.
- Local development with Azure Functions Core Tools.
- Integration with Azure DevOps, GitHub Actions.

## Versions History
- **v1**: Legacy, .NET Framework only (deprecated as of 2022).
- **v2**: Cross-platform support, Node.js introduction.
- **v3**: Performance optimizations, .NET Core support.
- **v4**: Current (as of 2026), enhanced isolation, latest language runtimes, improved security.

## Getting Started
1. Install Azure Functions Core Tools: `npm install -g azure-functions-core-tools@4`
2. Create a function app: `func init MyFunctionApp --javascript`
3. Add a function: `func new --name MyFunction --template "HTTP trigger"`
4. Run locally: `func start`
5. Deploy to Azure: `func azure functionapp publish <app-name>`

## Best Practices
- Keep functions small and single-purpose.
- Use bindings over direct SDK calls for simplicity.
- Monitor with Application Insights.
- Secure with authentication (e.g., Azure AD, API keys).

## Resources
- [Official Docs](https://docs.microsoft.com/en-us/azure/azure-functions/)
- [JavaScript Guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node)
- [Samples](https://github.com/Azure/azure-functions-samples)

This document provides a foundational understanding. For hands-on practice, start with simple HTTP-triggered functions.