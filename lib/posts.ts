export interface Post {
  title: string
  content: string
  author?: string
  tags?: string[]
}

// 샘플 포스트 데이터
const postsData: Post[] = [
  {
    title: "Next.js 13의 새로운 기능",
    content:
      "Next.js 13은 App Router, Server Components, Streaming 등 많은 새로운 기능을 도입했습니다. 이 글에서는 Next.js 13의 주요 기능과 변경사항에 대해 알아보겠습니다.\n\nApp Router는 기존의 Pages Router를 대체하는 새로운 라우팅 시스템입니다. 이를 통해 더 직관적인 파일 기반 라우팅이 가능해졌으며, 레이아웃, 로딩 상태, 에러 처리 등을 더 쉽게 구현할 수 있게 되었습니다.\n\nServer Components는 React 18과 함께 도입된 새로운 개념으로, 서버에서 렌더링되는 컴포넌트를 만들 수 있게 해줍니다. 이를 통해 클라이언트 측 JavaScript 번들 크기를 줄이고, 데이터 페칭을 더 효율적으로 할 수 있게 되었습니다.",
    author: "김개발",
    tags: ["Next.js", "React", "프론트엔드"],
  },
  {
    title: "TypeScript의 고급 타입 활용하기",
    content:
      "TypeScript는 JavaScript에 정적 타입을 추가한 언어로, 개발 시 많은 이점을 제공합니다. 이 글에서는 TypeScript의 고급 타입 기능을 활용하는 방법에 대해 알아보겠습니다.\n\n유니온 타입(Union Types)은 여러 타입 중 하나일 수 있는 값을 표현할 때 사용합니다. 예를 들어, string | number는 문자열이나 숫자 중 하나의 타입을 가질 수 있습니다.\n\n제네릭(Generics)은 타입을 파라미터화하여 재사용 가능한 컴포넌트를 만들 수 있게 해줍니다. 함수나 클래스가 다양한 타입에서 작동할 수 있도록 해주는 강력한 기능입니다.",
    author: "박타입",
    tags: ["TypeScript", "JavaScript", "프론트엔드"],
  },
  {
    title: "Docker를 이용한 개발 환경 구축",
    content:
      "Docker는 애플리케이션을 개발, 배포, 실행하기 위한 오픈 플랫폼입니다. 이 글에서는 Docker를 이용해 일관된 개발 환경을 구축하는 방법에 대해 알아보겠습니다.\n\nDocker를 사용하면 개발, 테스트, 프로덕션 환경을 일관되게 유지할 수 있습니다. 이는 '내 컴퓨터에서는 작동했는데...'라는 문제를 해결해줍니다.\n\nDockerfile을 작성하여 애플리케이션의 환경을 코드로 정의할 수 있으며, Docker Compose를 사용하면 여러 컨테이너로 구성된 애플리케이션을 쉽게 관리할 수 있습니다.",
    author: "이도커",
    tags: ["Docker", "DevOps", "백엔드"],
  },
  {
    title: "효율적인 Git 워크플로우",
    content:
      "Git은 현대 소프트웨어 개발에서 필수적인 버전 관리 시스템입니다. 이 글에서는 팀 프로젝트에서 효율적으로 Git을 활용하는 워크플로우에 대해 알아보겠습니다.\n\nGit Flow는 Vincent Driessen이 제안한 브랜칭 모델로, 대규모 프로젝트에 적합합니다. master, develop, feature, release, hotfix 등의 브랜치를 사용하여 체계적으로 개발을 진행합니다.\n\nGitHub Flow는 GitHub에서 제안한 더 간단한 워크플로우로, master 브랜치와 feature 브랜치만을 사용합니다. 지속적인 배포가 필요한 프로젝트에 적합합니다.",
    author: "최깃",
    tags: ["Git", "GitHub", "DevOps"],
  },
  {
    title: "React Query로 상태 관리 최적화하기",
    content:
      "React Query는 서버 상태 관리를 위한 라이브러리로, 데이터 페칭, 캐싱, 동기화, 업데이트 등을 쉽게 처리할 수 있게 해줍니다. 이 글에서는 React Query를 사용하여 애플리케이션의 상태 관리를 최적화하는 방법에 대해 알아보겠습니다.\n\nReact Query를 사용하면 로딩 상태, 에러 상태, 성공 상태 등을 쉽게 처리할 수 있으며, 자동으로 데이터를 리페칭하거나 캐싱할 수 있습니다.\n\n또한, 무한 스크롤, 페이지네이션, 낙관적 업데이트 등의 고급 기능도 쉽게 구현할 수 있습니다.",
    author: "정리액트",
    tags: ["React", "React Query", "프론트엔드"],
  },
]

// 모든 포스트 가져오기
export function getPosts(): Post[] {
  return postsData
}

// 슬러그로 포스트 가져오기
export function getPostBySlug(slug: string): Post | undefined {
  // 슬러그를 제목으로 변환 (하이픈을 공백으로 변환하고 첫 글자를 대문자로)
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return postsData.find((post) => post.title.toLowerCase() === title.toLowerCase())
}
