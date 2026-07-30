export type Badge = {
  label: string;
  color: string;
  logo?: string;
};

export const skills: Badge[] = [
  { label: "Python", color: "#3776AB", logo: "python" },
  { label: "FastAPI", color: "#009688", logo: "fastapi" },
  { label: "PostgreSQL", color: "#4169E1", logo: "postgresql" },
  { label: "SQLAlchemy", color: "#D71F00", logo: "sqlalchemy" },
  { label: "Redis", color: "#DC382D", logo: "redis" },
  { label: "Docker", color: "#2496ED", logo: "docker" },
  { label: "Nginx", color: "#009639", logo: "nginx" },
  { label: "Linux", color: "#FCC624", logo: "linux" },
];

export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Mini Shop DB",
    description: "Интернет магазин с оплатой",
    url: "https://github.com/doaks1638-netizen/MINI-SHOP-DB",
    tags: ["Python", "PostgreSQL", "FastAPI", "SQLAlchemy", "Docker", "Nginx"],
  },
  {
    title: "Aegis",
    description:
      "Backend-приложение на FastAPI — аутентификация, авторизация, REST API, Redis, Docker.",
    url: "https://github.com/doaks1638-netizen/Aegis",
    tags: ["Python", "FastAPI", "Redis", "Docker", "TOML configuration"],
  },
];

export type KnowledgeGroup = {
  icon: string;
  title: string;
  sections: { heading: string; items: string[] }[];
};

export const knowledge: KnowledgeGroup[] = [
  {
    icon: "🐍",
    title: "Python Core",
    sections: [
      {
        heading: "Fundamentals & Standard Library",
        items: [
          "datetime, os, sys, json, csv, pathlib, shutil, zipfile",
          "subprocess, argparse, re (regular expressions)",
        ],
      },
      {
        heading: "Advanced Python",
        items: [
          "Iterators, generators, send()/throw(), generator-based coroutines",
          "Decorators, closures, nonlocal, functools (cache, lru_cache, partial, reduce)",
          "itertools — chain, groupby, islice, combinations, permutations, tee, zip_longest",
          "collections — namedtuple, defaultdict, OrderedDict, Counter, deque",
          "Walrus operator :=, f-strings advanced formatting, match/case",
          "Recursion, heaps (heapq), stacks and queues",
        ],
      },
      {
        heading: "OOP",
        items: [
          "Magic/dunder methods — __new__, __del__, __repr__, __eq__, __hash__, __call__, __slots__",
          "Properties, @classmethod, @staticmethod, @singledispatchmethod",
          "Descriptors, context managers, contextlib",
          "Inheritance, super(), MRO, multiple inheritance",
          "Abstract classes (abc), polymorphism, composition, mixins",
          "dataclasses, Enum, bit operators",
          "Sequence, iterator, and context manager protocols",
        ],
      },
      {
        heading: "Type System",
        items: [
          "Full type annotation syntax, TypeVar, Generic, Protocol, Annotated, Literal",
        ],
      },
      {
        heading: "Ecosystem & Tooling",
        items: [
          "Virtual environments: venv, poetry, uv",
          "Module system, import internals, __init__.py",
          "Environment variables, python-dotenv",
        ],
      },
    ],
  },
  {
    icon: "⚡",
    title: "FastAPI & Backend",
    sections: [
      {
        heading: "FastAPI",
        items: [
          "Layered architecture — routers → services → repositories",
          "Dependency injection system, Depends, scoped dependencies",
          "APIRouter, tags, response models, status codes",
          "Pydantic v2 — model design, validators, model_config, Settings",
          "CORS, Middleware, lifespan events",
          "Pagination, search, media file management",
          "loguru logging",
          "gunicorn + uvicorn production setup",
        ],
      },
      {
        heading: "Authentication & Security",
        items: [
          "JWT access/refresh token flow",
          "Cookie-based sessions",
          "Authorization middleware",
        ],
      },
      {
        heading: "Testing",
        items: [
          "pytest — fixtures, parametrize, conftest",
          "API testing with httpx / TestClient",
        ],
      },
      {
        heading: "HTTP Protocol",
        items: [
          "Methods, status codes, headers, OPTIONS",
          "RESTful API design principles",
          "Request/response lifecycle",
        ],
      },
      {
        heading: "Async",
        items: [
          "asyncio from scratch — event loop, coroutines, tasks, futures",
          "Task, TaskGroup, gather, wait, as_completed",
          "asyncio.timeout, wait_for",
          "uvloop, eager task factory",
          "Async context managers, async generators",
          "contextvars, to_thread, thread pool executors",
          "Sockets, selectors, callbacks, streams",
        ],
      },
      {
        heading: "Integrations",
        items: ["YooKassa payment API"],
      },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    sections: [
      {
        heading: "PostgreSQL",
        items: [
          "Data types, constraints, NULL semantics",
          "Full CRUD, WHERE, ORDER BY, LIMIT/OFFSET, LIKE/ILIKE, IN, BETWEEN",
          "JOINs — INNER, LEFT, RIGHT, FULL, CROSS",
          "Aggregate functions, GROUP BY, HAVING, FILTER",
          "Subqueries, CTEs, recursive CTEs",
          "Window functions — ROW_NUMBER, RANK, LAG/LEAD, PARTITION BY",
          "Transactions — isolation levels, SAVEPOINT, SELECT FOR UPDATE/SHARE",
          "Indexes — B-tree, partial, covering, EXPLAIN ANALYZE",
          "ALTER TABLE, CAST, UPSERT, RETURNING, DISTINCT ON",
        ],
      },
      {
        heading: "SQLAlchemy 2.0",
        items: [
          "Engine, connect(), sync and async sessions",
          "Table definitions via ORM classes (DeclarativeBase)",
          "relationship() — lazy, selectinload, joinedload, back_populates",
          "Full query syntax — select, insert, update, delete",
          "__table_args__, hybrid_property, event system",
          "Bulk operations, soft delete pattern, mixins",
          "Pydantic ↔ SQLAlchemy integration (response models)",
        ],
      },
      {
        heading: "Alembic",
        items: ["Migration generation and management"],
      },
      {
        heading: "Redis",
        items: [
          "All data types — strings, hashes, lists, sets, sorted sets, streams",
          "Transactions (MULTI/EXEC), WATCH",
          "Caching patterns — cache-aside, write-through, cache invalidation",
          "API response caching with FastAPI",
          "Rate limiting, session management, counters",
          "Redis testing strategies",
        ],
      },
    ],
  },
  {
    icon: "🐋",
    title: "DevOps & Infrastructure",
    sections: [
      {
        heading: "Docker",
        items: [
          "Image building, layer optimization, .dockerignore",
          "Multi-stage builds, uv-based modern Python images",
          "Docker Compose — services, volumes, networks, depends_on, health checks",
          "Container networking",
        ],
      },
      {
        heading: "Nginx",
        items: [
          "Configuration structure, server/location blocks",
          "Static files, try_files, proxy_pass",
          "Reverse proxy for FastAPI/uvicorn",
          "WebSocket proxying, timeouts, custom headers",
          "Load balancing (upstream)",
          "HTTPS/TLS, security headers, performance tuning",
          "Nginx inside Docker",
        ],
      },
      {
        heading: "Linux",
        items: [
          "Shell navigation, permissions (chmod, chown, umask), groups",
          "Process management (ps, kill, jobs, nohup)",
          "Redirections, pipes, filters (grep, awk, sed, cut, sort, uniq)",
          "Package management (apt)",
          "SSH — key setup, server configuration, sftp, ftp",
          "Networking (ip, ss, netstat, curl, wget)",
          "File search (find, locate), environment variables",
          "vim/vi editing",
        ],
      },
    ],
  },
  {
    icon: "🌿",
    title: "Git & Workflow",
    sections: [
      {
        heading: "Git",
        items: [
          "Core Git — staging, commits, history, refs",
          "Branching strategies, Pull Requests",
          "merge vs rebase — when and why",
          "Conflict resolution",
          "git stash, cherry-pick, tags",
          "SSH key setup for GitHub",
          "GitHub Actions — CI/CD pipelines, workflow YAML, triggers, jobs",
        ],
      },
    ],
  },
];
