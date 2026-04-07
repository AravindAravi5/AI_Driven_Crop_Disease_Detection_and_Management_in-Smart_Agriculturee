import shutil, os

static = "static"

# Map of target filename in /static to an already-available source
image_map = {
    "wheat_rust.jpeg":       "static/crop_1.jpg",
    "corn_smut.jpg":         "static/crop_2.jpg",
    "patato.jpeg":           "static/crop_3.jpg",
    "Rice-Blast-Disease.png":"static/farm_banner.jpg",
    "apple-scab.jpg":        "static/crop_1.jpg",
    "financepagewali.jpg":   "static/farm_banner.jpg",
    "pexels-artiagarwal-2880741.jpg": "static/crop_2.jpg",
}

for dest_name, src in image_map.items():
    dest = os.path.join(static, dest_name)
    if not os.path.exists(dest):
        shutil.copy(src, dest)
        print(f"Copied {src} -> {dest}")
    else:
        print(f"Already exists: {dest}")

print("Done.")
