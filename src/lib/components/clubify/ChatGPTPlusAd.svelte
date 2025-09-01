<script lang="ts">
	// Always-visible, lighter themed advertisement component
	let {
		heading = 'অল্প খরচে চ্যাটজিপিটি প্লাস চান?',
		subheading = 'Study • Research • Writing • Brainstorm',
		href = 'https://bestpremiumsub.com/products/chatgpt-premium',
		price = 'From 199 BDT',
		highlight = 'Run by BUET Students'
	} = $props();
</script>

<section
	class="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-5 font-bengali shadow-sm sm:p-7"
	aria-labelledby="chatgpt-plus-ad-heading"
>
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.indigo.100),transparent_60%)]"
	></div>
	<div
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,theme(colors.indigo.50/.6),theme(colors.sky.50/.0),theme(colors.blue.50/.4))]"
	></div>

	<div class="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
		<div>
			<div class="mb-3 flex flex-wrap items-center gap-2">
				<span
					class="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[11px] font-medium text-white"
				>
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>
					{highlight}
				</span>
				<span
					class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-medium text-indigo-600"
				>
					⚡ Instant
				</span>
				<span
					class="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-medium text-sky-600"
				>
					🕐 24/7 Support
				</span>
			</div>
			<h3
				id="chatgpt-plus-ad-heading"
				class="text-xl font-semibold tracking-tight text-indigo-900 sm:text-2xl"
			>
				{heading}
			</h3>
			<p class="mt-1 text-xs font-medium tracking-wider text-indigo-500/80 uppercase">
				{subheading}
			</p>
			<p class="mt-3 max-w-prose text-sm leading-relaxed text-zinc-600">
				পড়াশোনা, রিসার্চ, লেখালেখি ও প্রোডাক্টিভিটি বাড়াতে সল্প মূল্যে ChatGPT Plus. ডেডিকেটেড
				অ্যাকাউন্ট, দ্রুত সাপোর্ট। আজই শুরু করুন।
			</p>
			<div class="mt-4 flex flex-wrap items-center gap-5">
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
				>
					🔥 Get Plus
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0-4 4m4-4H3"
						/>
					</svg>
				</a>
				<div class="flex items-baseline gap-2">
					<span class="text-base font-bold text-emerald-600">{price}</span>
					<span class="text-[10px] font-medium text-zinc-400 line-through">249 BDT</span>
				</div>
			</div>
			<p class="mt-3 text-[12px] text-zinc-400">Secure • Refund within 24h • Student run</p>
		</div>
		<!-- <div class="relative order-first mx-auto w-36 shrink-0 md:order-last md:w-44">
			<div class="relative aspect-square rounded-xl border border-indigo-100 bg-indigo-50/60 p-2">
				<div class="flex h-full w-full items-center justify-center rounded md:p-2">
					<div class="rounded-lg bg-white px-4 py-3 text-center shadow-sm ring-1 ring-indigo-100">
						<p class="text-[10px] font-semibold tracking-wider text-indigo-600">GPT PLUS</p>
						<p class="mt-1.5 text-[11px] leading-tight text-zinc-600">
							Faster<br />Latest<br />Higher
						</p>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</section>

<style>
	/* Removed heavy animations for a calmer light theme */
</style>
