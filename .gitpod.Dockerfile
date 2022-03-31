FROM gitpod/workspace-full
USER gitpod

# Install zsh
RUN sudo apt-get update && \
  sudo apt-get install -y zsh

ENV SHELL=zsh

# Install oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install Volta for JS tooling
RUN curl https://get.volta.sh | bash