#!/bin/bash
# Replace emojis with Material Icons

# Checkmark/replacement icons
sed -i '' 's/✅/<MaterialIcon name="check_circle" className="icon-success" \/>/g' intro.md
sed -i '' 's/❌/<MaterialIcon name="cancel" className="icon-error" \/>/g' intro.md
sed -i '' 's/📚/<MaterialIcon name="library_books" \/>/g' intro.md
sed -i '' 's/🤖/<MaterialIcon name="smart_toy" \/>/g' intro.md
sed -i '' 's/🎯/<MaterialIcon name="track_changes" \/>/g' intro.md
sed -i '' 's/🛡️/<MaterialIcon name="security" \/>/g' intro.md
sed -i '' 's/💾/<MaterialIcon name="save" \/>/g' intro.md
sed -i '' 's/🔧/<MaterialIcon name="build" \/>/g' intro.md
sed -i '' 's/🚀/<MaterialIcon name="rocket_launch" \/>/g' intro.md
sed -i '' 's/✨/<MaterialIcon name="star" \/>/g' intro.md

echo "Icons replaced in intro.md"
