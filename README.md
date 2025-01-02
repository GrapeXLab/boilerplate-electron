### Install Dependencies

```
pnpm
```

### Use it

```
# development mode
$ pnpm dev

# production build
$ pnpm build (or `pnpm run build` or `pnpm run build`)
```

### Important information

We no longer use react-icons. We will use lucide icons, follow the link below https://lucide.dev/icons/

We will no longer use npm, this project will mainly use yarn

We will work with PRs

It is important to start creating unit tests to ensure the quality of our software, so we will use jest for this.

We will have a CI/CD stage to validate the quality of our software, where the PR will only be merged once the CI/CD stages are satisfied, the stages will be build, test and lint
