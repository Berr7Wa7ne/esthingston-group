from pathlib import Path
import re

path = Path(__file__).resolve().parent.parent / 'property-list.html'
text = path.read_text(encoding='utf-8')

# Insert CTA button after each property description, if missing.
pattern = re.compile(r'(</p>\r?\n\s*)(</div>\r?\n\s*</div>\r?\n\s*</div>)')
text = pattern.sub(r"\1                                <a class=\"btn btn-primary btn-sm mt-3\" href=\"contact.html\">Enquire Now</a>\2", text)

# Fix cases where escaped quotes got written out and ensure correct formatting.
text = re.sub(r"\s*<a class=\\\"btn btn-primary btn-sm mt-3\\\" href=\\\"contact.html\\\">Enquire Now</a></div>",
              "                                <a class=\"btn btn-primary btn-sm mt-3\" href=\"contact.html\">Enquire Now</a>\n                            </div>",
              text)

# Ensure the CTA is on its own line after the price paragraph.
text = re.sub(r"</p>\s*<a class=\"btn btn-primary btn-sm mt-3\"", "</p>\n                                <a class=\"btn btn-primary btn-sm mt-3\"", text)

path.write_text(text, encoding='utf-8')
print('updated')
