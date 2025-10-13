import content from "@/data/content.json";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Footer() {
  return (
    <footer className="py-4 border-top mt-5">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} {data.name}. All rights reserved.</small>
      </div>
    </footer>
  );
}
