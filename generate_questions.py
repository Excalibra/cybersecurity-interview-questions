import os
from pathlib import Path
import json

def generate_categories_js():
    base_dir = Path("docs/questions")
    print(f"🔍 Scanning: {base_dir.absolute()}")

    # Match your actual folder names
    categories_config = {
        "web-penetration": {"key": "web", "title": "Web Application Penetration Testing"},
        "red-team": {"key": "red", "title": "Red Team Operations"},
        "security-engineer": {"key": "seceng", "title": "Security Engineer"}
    }

    categories = {cfg["key"]: {"title": cfg["title"], "items": []} for cfg in categories_config.values()}

    found = 0

    for folder_name, cfg in categories_config.items():
        category_dir = base_dir / folder_name
        print(f"📁 Checking: {folder_name}")
        
        if not category_dir.exists():
            print(f"   ❌ Not found")
            continue

        md_files = sorted([f for f in category_dir.glob("*.md") if f.name != "index.md"])
        print(f"   Found {len(md_files)} files")

        for md_file in md_files:
            try:
                with open(md_file, "r", encoding="utf-8") as f:
                    first_line = f.readline().strip()
                    title = first_line[2:].strip() if first_line.startswith("# ") else md_file.stem.replace("-", " ").title()
            except:
                title = md_file.stem.replace("-", " ").title()

            link = f"/cybersecurity-interview-questions/questions/{folder_name}/{md_file.name.replace('.md', '/')}"
            
            categories[cfg["key"]]["items"].append({"text": title, "link": link})
            found += 1
            print(f"   ✓ {title}")

    js_content = f"""// Auto-generated - DO NOT EDIT
const categories = {json.dumps(categories, indent=2)};
"""

    with open("docs/questions/categories.js", "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\n✅ Generated {found} questions!")

if __name__ == "__main__":
    generate_categories_js()
