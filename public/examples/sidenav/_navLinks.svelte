<script>
  import CommentIcon from "@iconscout/unicons/svg/comment-alt.svg";
  import MessageIcon from "@iconscout/unicons/svg/envelope-alt.svg";
  import ClockIcon from "@iconscout/unicons/svg/clock.svg";
  import SuitcaseIcon from "@iconscout/unicons/svg/suitcase-alt.svg";
  import FolderIcon from "@iconscout/unicons/svg/folder.svg";

  const links = [
    { name: "Feed", icon: CommentIcon },
    { name: "Messages", icon: MessageIcon },
    { name: "Calendar", icon: ClockIcon },
    { name: "Jobs", icon: SuitcaseIcon },
    { name: "Assets", icon: FolderIcon }
  ];
</script>

<div class="pt-4 -mx-3 border-b border-gray-300">
  {#each links as link}
    <a href="#!" class="block hover:bg-gray-100 border-t border-gray-300">
      <span class="p-5 inline-block align-middle" style="width:64px;">
        {@html link.icon}
      </span>
      <span class="align-middle">{link.name}</span>
    </a>
  {/each}
</div>