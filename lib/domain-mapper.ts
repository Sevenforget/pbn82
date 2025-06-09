// 클라이언트 사이드 도메인 매핑
// 서버 사이드 fs 모듈을 사용할 수 없으므로 하드코딩된 매핑 사용

interface DomainMapping {
  origin: string;
  domain: string;
}

// 도메인 매핑 데이터 (클라이언트용 - 필요시 API로 가져올 수 있음)
const DOMAIN_MAPPINGS: DomainMapping[] = [];

/**
 * 프로젝트 이름(origin)으로 도메인을 조회하는 함수
 * @param origin 프로젝트 이름 (예: "pbn1", "pbn2")
 * @returns 해당 도메인 문자열 또는 null
 */
export function getDomainByOrigin(origin: string): string | null {
  const mapping = DOMAIN_MAPPINGS.find((item) => item.origin === origin);
  return mapping ? mapping.domain : null;
}

/**
 * 현재 프로젝트의 도메인을 자동으로 감지하는 함수 (클라이언트용)
 * window.location이나 기타 클라이언트 정보를 활용
 * @returns 현재 프로젝트의 도메인 또는 기본값
 */
export function getCurrentProjectDomain(): string {
  try {
    // 브라우저 환경에서 현재 URL 확인
    if (typeof window !== "undefined") {
      const currentHostname = window.location.hostname;

      // vercel.app 도메인인 경우 프로젝트명 추출
      if (currentHostname.includes("vercel.app")) {
        const projectMatch = currentHostname.match(/v0-(pbn\d+)\.vercel\.app/);
        if (projectMatch) {
          const projectName = projectMatch[1];
          const domain = getDomainByOrigin(projectName);
          if (domain) {
            return domain;
          }
        }
      }

      // 커스텀 도메인인 경우 매핑에서 찾기
      const customDomain = DOMAIN_MAPPINGS.find((mapping) =>
        mapping.domain.includes(currentHostname)
      );
      if (customDomain) {
        return customDomain.domain;
      }
    }

    // 개발 환경이나 감지 실패시 pbn2 기본값 사용
    return getDomainByOrigin("pbn2") || "https://cityvertical.com";
  } catch (error) {
    console.error("현재 프로젝트 도메인 감지 중 오류:", error);
    return "https://cityvertical.com"; // 기본값
  }
}

/**
 * 프로젝트 이름으로 도메인을 조회하되, 없으면 기본값을 반환
 * @param origin 프로젝트 이름
 * @param defaultDomain 기본 도메인 (선택사항)
 * @returns 도메인 문자열
 */
export function getDomainWithFallback(
  origin: string,
  defaultDomain = "https://cityvertical.com"
): string {
  const domain = getDomainByOrigin(origin);
  return domain || defaultDomain;
}
