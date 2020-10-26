---
title: zsh 隐藏命令提示符前面的用户名和主机名
categories: Tech
date: 2020/10/26 18:14:00
id: 785
tags: 
 - zsh
---


要隐藏用户名和主机名，需要在`~/.zshrc` 配置文件中，增加一行：
```bash
prompt_context() {}
```

如果要保留用户名，隐藏主机名，则使用
```bash
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
  fi
}
```

如果要保留主机名，隐藏用户名，则使用
```bash
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$HOST"
  fi
}
```

然后别忘了使用以下命令或重启命令行应用让配置生效
```bash
source ~/.zshrc
```

