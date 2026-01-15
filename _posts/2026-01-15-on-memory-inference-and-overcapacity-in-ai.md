---
title: "On Memory, Inference, and Overcapacity in AI"
date: 2026-01-15
tags:
  - AI
  - LLM
  - inference
  - edge-computing
description: "Thoughts on memory bandwidth, inference needs, and whether we have overcapacity in AI compute."
---

Large language models and transformers are very, very powerful.

However, my claim is that a large portion of what LLM inferences need by companies and corporations, as well as end consumers in their day-to-day lives, is something that is constrained by memory bandwidth and memory capacities.[^1][^2]

<!--more-->

It does not matter as much for me if the message that I send to ChatGPT takes 10–15 seconds more, as long as it doesn't fail, as long as I don't have to pay as much money, and as long as it doesn't hallucinate. Given these constraints, it does not feel like the primary requirements of users is that of extremely fast inference.

Most users who are interacting with ChatGPT or with other large language models or the services that they're trying to provide will only be able to process so much information at a particular point of time. Given this, it felt to me that ChatGPT on Android unreliably crashing when running in temporary memory mode or GitHub Copilot sometimes not being able to run or continue with the chat were bigger breaks than a model which hallucinates frequently.

Additionally, I never had to go ahead and fine-tune all of these or train all of these large language models from scratch. I just needed to depend on inference for user-use cases such as mine.

For example, the usage of various deep research modes, starting from DeepSeek, Gemini, and ChatGPT, and later Claude, are all examples of how I personally was always willing to give up more time in order to go through a larger number of sources just to get more verifiable data.

The performance, the raw inference performance of locally running LLMs on consumer gaming GPUs like the 3070, NVIDIA 3070 8GB left me pleasantly surprised, especially when using quantized models.[^3][^4]

Secondly, there has been an improvement and increase in the use of CPUs or NPUs for inference. CPUs and NPUs require the usage of RAM or some unified RAM for storing of models.[^5][^6]

These have an obvious downside of being slower in terms of inference speed. However, the fact that Apple's silicon can run a 48GB model even with slower inference locally gives credence that Edge AI, even with slower inference, would truly be valuable.[^7]

It feels like memory and inference are two sides of the AI coin, and we have been increasing both of these to an extremely large extent.

Most of the important inference that is needed by a user in their day-to-day lives that I can imagine, such as for NLP to text transcribing and then to perform certain tasks on the basis of that transcribing, all seem possible with a small locally running LLM that is built on top of some home assistant or some other sort of a layer if I wanted to, for example, automate my house using NLP.[^8][^9]

For example, a small locally running agent that is built on top of Home Assistant, but with Whisper and an NLP layer on top of it, already covers a large fraction of what I would consider important day-to-day inference needs.

Similarly, if I wanted to run some coding assistance, here latency would be a lot more significant, but it would allow me to run code, coding assistance on without having to rely on an internet connection.

Given this, it feels more feasible that users would be unwilling to pay for models that are running on cloud machines if the price for them is too high, if the hardware that they already have available is able to perform the same task, albeit slowly.

These, the complexity of fine-tuning transformers and fine-tuning a large number of agents, maybe a mixture of experts or other agents who are working in a sequence as part of a workflow, all of these may still require extremely large compute, but the end user who is using these trained flows, Not all of them will need the same.

Examples of Meta's smaller models and their mobile models all show that tool calling, fine-tuning, distillation, and all of these other such technologies have greatly helped in bridging the gap between what initial small language models and current small language models that are leveraging large language models, either for the synthesis of data or for task-specific distillation, are all quite effective.[^10][^11]

Hybrid AI is something that will just improve latency and performance if we consider every user having a lot of compute available on their edge devices, such as their phones or whatever device they're using to interact. The cost of transcribing it locally and then sending it to the cloud LLM and then receiving the outputs feels like a much better use.

This is obviously being done, but there is scope for improvement in terms of what responsibilities each of these takes over and what responsibilities should not be transferred to the cloud for data sovereignty, privacy, and latency reasons.

By overcapacity, I mean that all of these GPU workloads, etc., may only be needed for coding use cases, may only be needed for various complex image recognition tasks where a smaller transformer will not work, and so on.

But for many of the day-to-day cases where an AI that is not hallucinating and is bounded with okay latency is good enough.

For other AI flows, extremely high bandwidth, extremely large sizes of GPU VRAM and server RAM seems like an overcapacity.[^12]

There is only so much that I can expect a single large language model to do, even if the inference speed is extremely high, I am limited by the sequential nature of any flows.[^13]

So if the question is that of having parallel LLMs, then it feels like the question is no longer of a single large GPU, but that of multi-GPU, multi-agent orchestration.[^14]

For this, a single large GPU would provide a boost, but I feel like that is not the limiting factor preventing greater user adoption.

[^1]: [LLM Inference Performance Engineering Best Practices](https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices)
[^2]: [Memory Constraints in LLM Inference](https://arxiv.org/abs/2404.10469)
[^3]: [llama.cpp - LLM inference in C/C++](https://github.com/ggerganov/llama.cpp)
[^4]: [4-bit Transformers with bitsandbytes](https://huggingface.co/blog/4bit-transformers-bitsandbytes)
[^5]: [Apple Developer - On-device ML](https://developer.apple.com/news/?id=vk3m8j7n)
[^6]: [Microsoft Phi Silica](https://learn.microsoft.com/en-us/windows/ai/apis/phi-silica)
[^7]: [Apple M3 Max can run 70B LLMs locally](https://www.notebookcheck.net/Apple-M3-Max-can-run-70B-LLMs-locally.782703.0.html)
[^8]: [Home Assistant Local Voice](https://www.home-assistant.io/blog/2023/12/13/local-voice/)
[^9]: [OpenAI Whisper](https://openai.com/research/whisper)
[^10]: [Meta Llama](https://ai.meta.com/llama/)
[^11]: [Distilling Step-by-Step](https://arxiv.org/abs/2305.02301)
[^12]: [AI boom drives global memory chip shortage](https://www.reuters.com/world/asia-pacific/ai-boom-drives-global-memory-chip-shortage-2026-01-14/)
[^13]: [Sequential Processing Limits in LLMs](https://arxiv.org/abs/2307.03109)
[^14]: [Multi-Agent Orchestration](https://arxiv.org/abs/2402.01680)
